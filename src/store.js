import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { uuid, saveStatePlugin } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
    plugins:
    [
        saveStatePlugin
    ],

    state:
    {
        board
    },

    mutations:
    {
        createTask(state, { tasks, name })
        {
            tasks.push({
                name: name,
                id: uuid(),
                description: '',
            })
        },

        updateTask(state, { task, key, value })
        {
            Vue.set(task, key, value)
        },

        moveTask(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex })
        {
            const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]

            toTasks.splice(toTaskIndex, 0, taskToMove)
        },

        moveColumn(state, { fromColumnIndex, toColumnIndex })
        {
            const columnList = state.board.columns
            const columnToMove = columnList.splice(fromColumnIndex, 1)[0]

            columnList.splice(toColumnIndex, 0, columnToMove)
        },

        createColumn(state, { name })
        {
            state.board.columns.push({
                name: name,
                tasks: [],
            })
        },
    },

    getters:
    {
        getTask(state)
        {
            return (id) => {
                for (const column of state.board.columns) {
                    for (const task of column.tasks) {
                        if (task.id === id) {
                            return task
                        }
                    }
                }
            }
        },
    },
})
