<template>
    <div class="board">
        <div class="flex items-start">
            <div
                v-for="(column, columnIndex) in store.board.columns"
                :key="columnIndex"
                draggable
                @drop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
                @dragover.prevent
                @dragenter.prevent
                @dragstart.self="pickupColumn($event, columnIndex)"
                class="column">

                <div class="flex items-center mb-2 font-bold">
                    {{ column.name }}
                </div>

                <!-- Tasks -->
                <div class="list-reset">
                    <div
                        v-for="(task, taskIndex) of column.tasks"
                        :key="task.id"
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

                    <input
                        @keyup.enter="createTask($event, column.tasks)"
                        type="text"
                        class="block p-2 w-full bg-transparent"
                        placeholder="+ Enter new task"
                    />
                </div>
            </div>

            <div class="column flex">
                <input
                    class="p-2 mr-2 flex-grow"
                    placeholder="New Column Name"
                    type="text"
                    v-model="newColumnName"
                    @keyup.enter="createColumn"
                />
            </div>
        </div>

        <div
            v-if="isTaskOpen"
            class="task-bg"
            @click.self="close">

            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                store: this.$store.state,
                newColumnName: '',
            }
        },

        methods:
        {
            createColumn()
            {
                this.$store.commit('createColumn', {
                    name: this.newColumnName,
                })

                this.newColumnName = ''
            },

            pickupTask(event, taskIndex, fromColumnIndex)
            {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.dropEffect = 'move'

                event.dataTransfer.setData('from-task-index', taskIndex)
                event.dataTransfer.setData('from-column-index', fromColumnIndex)
                event.dataTransfer.setData('type', 'task')
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

            createTask(event, tasks)
            {
                this.$store.commit('createTask', {
                    name: event.target.value,
                    tasks: tasks,
                })

                event.target.value = ''
            },

            close()
            {
                this.$router.push({
                    name: 'board',
                })
            },

            openTask(task)
            {
                this.$router.push({
                    name: 'task',
                    params: {
                        id: task.id
                    }
                })
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

        computed:
        {
            isTaskOpen()
            {
                return this.$route.name === 'task'
            },
        },
    }
</script>

<style lang="css">
    .task {
        @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }

    .column {
        @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
        min-width: 350px;
    }

    .board {
        @apply p-4 bg-teal-dark h-full overflow-auto;
        background: url('/img/bg.jpg');
        background-size: cover;
    }

    .task-bg {
        @apply pin absolute;
        background: rgba(0,0,0,0.5);
    }
</style>
