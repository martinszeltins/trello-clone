<template>
    <App-drop @drop="moveTaskOrColumn">
        <App-drag :transferData="{ type: 'column', fromColumnIndex: columnIndex }">
            <div class="column">
                <div class="flex items-center mb-2 font-bold">
                    {{ column.name }}
                </div>

                <div class="list-reset">
                    <Task         
                        v-for="(task, taskIndex) of column.tasks"
                        :key="task.id"
                        :task="task"
                        :taskIndex="taskIndex"
                        :columnIndex="columnIndex"
                        :column="column"
                    />

                    <input
                        @keyup.enter="createTask($event, column.tasks)"
                        type="text"
                        class="block p-2 w-full bg-transparent"
                        placeholder="+ Enter new task"
                    />
                </div>
            </div>
        </App-drag>
    </App-drop>
</template>

<script>
    import AppDrag from './AppDrag.vue'
    import AppDrop from './AppDrop.vue'
    import Task from '../components/Task.vue'
    import MovingTasksAndColumns from '../mixins/movingTasksAndColumns.js'

    export default {
        components:
        {
            Task,
            AppDrag,
            AppDrop,
        },

        mixins: [ MovingTasksAndColumns ],

        data()
        {
            return {
                store: this.$store.state,
            }
        },

        methods:
        {
            createTask(event, tasks)
            {
                this.$store.commit('createTask', {
                    name: event.target.value,
                    tasks: tasks,
                })

                event.target.value = ''
            },
        },
    }
</script>

<style>
    .column {
        @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
        min-width: 350px;
    }
</style>