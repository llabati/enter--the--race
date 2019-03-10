import Vue from 'vue'
import Router from 'vue-router'
import Race from '@/components/Race'
import EndGame from '@/components/EndGame'
import Desist from '@/components/Desist'
import History from '@/components/History'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Race',
      component: Race
    },
    {
      path: '/end',
      name: 'EndGame',
      component: EndGame,

    },
    
    {
      path: '/desist',
      name: 'Desist',
      component: Desist
    },
    {
      path: '/history',
      name: 'History',
      component: History

    }
    
  ]
})
