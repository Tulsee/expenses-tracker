import Vue from 'vue'
import Router from 'vue-router'

import ExpensesPage from '@/pages/ExpensesPage'
import addExpenses from '@/components/addExpenses'
import EditPage from '@/components/EditPage'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'ExpensesPage',
      component: ExpensesPage
    },
    {
      path: '/add',
      name: 'addExpenses',
      component: addExpenses
    },
    {
      path: '/edit/:id',
      name: 'EditPage',
      component: EditPage
    }
  ],
  mode: 'history'
})
export default router
