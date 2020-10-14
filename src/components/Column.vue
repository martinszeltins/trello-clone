<template>
    <div
        draggable
        @drop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
        @dragover.prevent
        @dragenter.prevent
        @dragstart.self="pickupColumn($event, columnIndex)"
        class="column">

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
</template>

<script>
    import Task from '../components/Task.vue'

    export default {
        props:
        {
            column: {
                type: Object,
                required: true,
            },

            columnIndex: {
                type: Number,
                required: true,
            },
        },

        components:
        {
            Task,
        },

        data()
        {
            return {
                store: this.$store.state,
            }
        },

        methods:
        {
            moveTask(event, toTasks, toTaskIndex)
            {
                const fromColumnIndex = event.dataTransfer.getData('from-column-index')
                const fromTasks = this.store.board.columns[fromColumnIndex].tasks
                const fromTaskIndex = event.dataTransfer.getData('from-task-index')

                this.$store.commit('moveTask', {
                    fromTasks: fromTasks,
                    toTasks: toTasks,
                    fromTaskIndex: fromTaskIndex,
                    toTaskIndex: toTaskIndex,
                })
            },

            createTask(event, tasks)
            {
                this.$store.commit('createTask', {
                    name: event.target.value,
                    tasks: tasks,
                })

                event.target.value = ''
            },

            pickupColumn(event, fromColumnIndex)
            {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.dropEffect = 'move'

                event.dataTransfer.setData('from-column-index', fromColumnIndex)
                event.dataTransfer.setData('type', 'column')
            },

            moveTaskOrColumn(event, toTasks, toColumnIndex, toTaskIndex)
            {
                const type = event.dataTransfer.getData('type')

                if (type == 'task') {
                    let index = (toTaskIndex !== undefined) ? toTaskIndex : toTasks.length
                    this.moveTask(event, toTasks, index)
                }

                if (type == 'column') {
                    this.moveColumn(event, toColumnIndex)
                }
            },

            moveColumn(event, toColumnIndex)
            {
                const fromColumnIndex = event.dataTransfer.getData('from-column-index')

                this.$store.commit('moveColumn', {
                    fromColumnIndex: fromColumnIndex,
                    toColumnIndex: toColumnIndex,
                })
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