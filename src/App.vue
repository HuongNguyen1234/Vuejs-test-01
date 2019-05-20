<template>
  <div id="app">
   <h1>What do you want ?</h1>

        <task-list :list="showList" @changed="changeStatus($event)"/>
        
        <button @click="changeShowType('all')">All</button>
        <button @click="changeShowType('active')">Active</button>
        <button @click="changeShowType('completed')">Completed</button>
        <button @click="changeShowType('clear')">Clear Completed</button>

  
  </div>
</template>

<script>
import TaskList from './components/task-list.vue';

export default {
  name: 'app',
  component:{
    'task-list': TaskList, 
  },
  data () {
    return {
      showType: '',
      taskList:[
         {
           id: 1,
           name: 'Using VueJs to interact with the DOM',
           completed: false,
         },
         { id:2,
           name: 'Using Conditionals and Rendering lists',
           completed: false,
         },
         { id:3,
           name: 'Understanding the VueJS Instance',
           completed: true,
         },
      ],
    
    }
  },
  computed: {
    
    showList() {
     
      if (this.showType == 'all') {
        return this.taskList
      }
      if (this.showType == 'active') {
        let activeList=this.taskList.filter(task => task.completed==false);
        
        return activeList
      }
      
      if(this.showType=='completed'){
        let completedList=this.taskList.filter(task => task.completed==true);
     
        return completedList
      }
       if(this.showType=='clear'){
          
        for (let index = 0; index < this.taskList.length; index++) {
          if(this.taskList[index].completed==true){
              this.taskList.splice(index,1);

          }
          
        }
        
        return this.taskList;
        }
      return[];
    }
  },
  methods: {
    changeShowType(type) {
      this.showType = type
    },
    changeStatus(id) {
      for (let index = 0; index < this.taskList.length; index++) {
          if(this.taskList[index].id==id){
              this.taskList[index].completed = !this.taskList[index].completed
          }
          
        }
    }
  }

}
</script>

<style>

</style>
