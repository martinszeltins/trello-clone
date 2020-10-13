import { uuid } from './utils'

export default {
    name: 'Workshop Board',

    columns: [
        {
            name: 'todo',

            tasks: [
                {
                    id: '1',
                    name: 'first task',
                    description: 'Take out the trash which is found on the fridge',
                    userAssigned: null,
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
                    description: 'The bag is in the room',
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
        },

        {
            name: 'do later',

            tasks: [
                {
                    id: uuid(),
                    name: 'Do this thing later',
                    description: '',
                    userAssigned: null
                }
            ]
        },
    ]
}
