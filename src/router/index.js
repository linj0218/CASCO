import Vue from 'vue'
import Router from 'vue-router'

const Demo = r => require.ensure([], () => r(require('@/pages/demo')), 'main')
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'main')
const CurrentTask = r => require.ensure([], () => r(require('@/pages/currentTask')), 'main')
const HistoricalTask = r => require.ensure([], () => r(require('@/pages/historicalTask')), 'main')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }, {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'currentTask'
        },
        {
          path: 'currentTask',
          component: CurrentTask
        },
        {
          path: 'historicalTask',
          component: HistoricalTask
        }
      ]
    }
  ]
})
