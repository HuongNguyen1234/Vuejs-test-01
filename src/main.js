import Vue from 'vue'
import App from './App.vue'
import TaskList from './components/task-list.vue'
import Task from './components/task.vue'

Vue.component('task-list', TaskList)
Vue.component('task', Task)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
