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
    export default {
        props:
        {
            column: {
                type: Object,
                required: true,
            },

            task: {
                type: Object,
                required: true,
            },

            taskIndex: {
                type: Number,
                required: true,
            },

            columnIndex: {
                type: Number,
                required: true,
            },
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

            pickupTask(event, taskIndex, fromColumnIndex)
            {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.dropEffect = 'move'

                event.dataTransfer.setData('from-task-index', taskIndex)
                event.dataTransfer.setData('from-column-index', fromColumnIndex)
                event.dataTransfer.setData('type', 'task')
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
    .task {
        @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }
</style>