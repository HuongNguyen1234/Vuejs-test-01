<template>
    <div>
        <task v-for="( task, index ) in list" :key="index" :task="task" v-on:statusChanged="changed($event)"/>
    </div>
</template>
<script>
import Task from './task.vue';
export default {
    name: 'task-list',
    components: {
        Task,
    },
    props: ['list'],
    methods: {
        changed(id) {
            this.$emit('changed', id)
        }
    }
}
</script>
<style scoped>

</style>
