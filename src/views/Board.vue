<template>
    <div class="board">
        <div class="flex items-start">
            <div
                v-for="(column, columnIndex) in store.board.columns"
                :key="columnIndex"
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
                        draggable
                        @dragstart="pickupTask($event, taskIndex, columnIndex)"
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
                store: this.$store.state
            }
        },

        methods:
        {
            pickupTask(event, taskIndex, fromColumnIndex)
            {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.dropEffect = 'move'

                event.dataTransfer.setData('task-index', taskIndex)
                event.dataTransfer.setData('from-column-index', fromColumnIndex)
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
