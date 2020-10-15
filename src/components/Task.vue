<template>
    <App-drop @drop="moveTaskOrColumn">
        <App-drag :transferData="{ type: 'task', fromColumnIndex: columnIndex, fromTaskIndex: taskIndex }">
            <div
                class="task"
                @click="openTask(task)">

                <span class="w-full flex-no-shrink font-bold">
                    {{ task.name }}
                </span>

                <p
                    v-if="task.description"
                    class="w-full flex-no-shrink mt-1 text-sm">

                    {{ task.description }}
                </p>
            </div>
        </App-drag>
    </App-drop>
</template>

<script>
    import AppDrag from './AppDrag.vue'
    import AppDrop from './AppDrop.vue'
    import MovingTasksAndColumns from '../mixins/movingTasksAndColumns.js'

    export default {
        props:
        {
            task: {
                type: Object,
                required: true,
            },

            taskIndex: {
                type: Number,
                required: true,
            },
        },

        mixins: [ MovingTasksAndColumns ],

        components:
        {
            AppDrag,
            AppDrop,
        },

        data()
        {
            return {
                store: this.$store.state,
            }
        },

        methods:
        {
            openTask(task)
            {
                this.$router.push({
                    name: 'task',
                    params: {
                        id: task.id
                    }
                })
            },
        },
    }
</script>

<style>
    .task {
        @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }
</style>