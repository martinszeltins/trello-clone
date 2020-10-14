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