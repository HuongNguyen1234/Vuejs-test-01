<template>
    <div>
        <ul :class="{'style-text': task.completed }">
            <input type="checkbox"  :checked="task.completed" @click="changeChecked()">{{task.name}}
            
        </ul>
    </div>
</template>
<script>
export default {
    name: 'task',
    props: ['task'],
  methods:{
      changeChecked(){
          this.$emit('statusChanged',this.task.id);

      }
  }
}
</script>
<style scoped>
    .style-text {
        text-decoration: line-through;
    }
</style>
