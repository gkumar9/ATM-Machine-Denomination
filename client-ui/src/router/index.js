import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/HelloWorld'
import withdraw from '@/components/withdraw'
import denomination from '@/components/denomination'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/withdraw/:id',
      name: 'withdraw',
      component: withdraw,
      props: {
        id: String,
        required: true
      }
    },
    {
      path: '/denomination/:id',
      name: 'denomination',
      component: denomination,
      props: {
        id: String,
        required: true
      }
    }
  ]
})
