<template>
    <div class="board">
        <div class="flex items-start">
            <Column
                v-for="(column, columnIndex) of store.board.columns"
                :key="columnIndex"
                :column="column"
                :columnIndex="columnIndex"
            />

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
    import Column from '../components/Column.vue'

    export default {
        components:
        {
            Column
        },

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

            close()
            {
                this.$router.push({
                    name: 'board',
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
