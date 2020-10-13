<template>
    <div class="task-view">
        <div class="flex flex-col flex-grow items-start justify-between px-4">
            <input
                class="p-2 w-full mr-2 block text-xl font-bold"
                :value="task.name"
                @change="updateTask($event, 'name')"
                @keyup.enter="updateTask($event, 'name')"
            />

            <textarea
                class="relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal w-full"
                :value="task.description"
                @change="updateTask($event, 'description')"
            />
        </div>
    </div>
</template>

<script>
    export default {
        methods:
        {
            updateTask(event, key)
            {
                this.$store.commit('updateTask', {
                    task: this.task,
                    key: key,
                    value: event.target.value,
                })
            },
        },

        computed:
        {
            task()
            {
                return this.$store.getters.getTask(this.$route.params.id)
            },
        },
    }
</script>

<style>
    .task-view {
        @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
        max-width: 700px;
    }
</style>
