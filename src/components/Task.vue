<template>
    <div
        @click="openTask(task)"
        @dragstart="pickupTask($event, taskIndex, columnIndex)"
        @dragover.prevent
        @dragenter.prevent
        @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
        draggable
        class="task">

        <span class="w-full flex-no-shrink font-bold">
            {{ task.name }}
        </span>

        <p
            v-if="task.description"
            class="w-full flex-no-shrink mt-1 text-sm">

            {{ task.description }}
        </p>
    </div>
</template>

<script>
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

            pickupTask(event, taskIndex, fromColumnIndex)
            {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.dropEffect = 'move'

                event.dataTransfer.setData('from-task-index', taskIndex)
                event.dataTransfer.setData('from-column-index', fromColumnIndex)
                event.dataTransfer.setData('type', 'task')
            },
        },
    }
</script>

<style>
    .task {
        @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }
</style>