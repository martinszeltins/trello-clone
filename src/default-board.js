import { uuid } from './utils'

export default {
    name: 'Workshop Board',

    columns: [
        {
            name: 'todo',

            tasks: [
                {
                    id: uuid(),
                    name: 'first task',
                    description: '',
                    userAssigned: null
                },

                {
                    id: uuid(),
                    name: 'second task',
                    description: '',
                    userAssigned: null
                },

                {
                    id: uuid(),
                    name: 'and thrid',
                    description: '',
                    userAssigned: null
                }
            ]
        },

        {
            name: 'in-progress',

            tasks: [
                {
                    id: uuid(),
                    name: 'first task',
                    description: '',
                    userAssigned: null
                }
            ]
        },

        {
            name: 'done',

            tasks: [
                {
                    id: uuid(),
                    name: 'first task',
                    description: '',
                    userAssigned: null
                }
            ]
        }
    ]
}
