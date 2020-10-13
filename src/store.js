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

        moveTask(state, { fromColumn, toColumn, taskIndex })
        {
            const taskToMove = fromColumn.splice(taskIndex, 1)[0]
            toColumn.push(taskToMove)
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
