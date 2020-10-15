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
        moveTask({ fromColumnIndex, fromTaskIndex })
        {
            const fromTasks = this.store.board.columns[fromColumnIndex].tasks

            this.$store.commit('moveTask', {
                fromTasks: fromTasks,
                toTasks: this.column.tasks,
                fromTaskIndex: fromTaskIndex,
                toTaskIndex: this.taskIndex,
            })
        },

        moveTaskOrColumn(transferData)
        {
            if (transferData.type == 'task') {
                this.moveTask(transferData)
            }

            if (transferData.type == 'column') {
                this.moveColumn(transferData)
            }
        },

        moveColumn({ fromColumnIndex })
        {
            this.$store.commit('moveColumn', {
                fromColumnIndex: fromColumnIndex,
                toColumnIndex: this.columnIndex,
            })
        },
    },
}