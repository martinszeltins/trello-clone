<template>
    <div
        @drop.self="onDrop"
        @dragover.prevent
        @dragenter.prevent>
        <slot />
    </div>
</template>

<script>
    export default {
        methods:
        {
            onDrop(event)
            {
                alert()
                const transferData = JSON.parse(event.dataTransfer.getData('payload'))

                this.$emit('drop', this.transferData)
            },
        },
    }
</script>

<style>

</style>