import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: [],
    expense: {}
  },
  getters: {
    expenses: (state) => state.expenses
  },
  actions: {
    fetchExpenses({
      commit,
      state
    }) {
      return axios.get('api/all/').then(res => {
        const expenses = res.data
        commit('setExpenses', expenses)
        // console.log(res)
        return state.expenses
      })
    },
    addExpenses(context, formData) {
      let data = JSON.parse(JSON.stringify(formData))
      console.log(data)
      return axios.post('api/all/', data).then(
        res => {
          console.log(res)
        }
      )
    },
    async deleteExpense({
      commit
    }, Id) {
      await axios.delete(`/api/all/${Id}/`);
      commit('removeExpense', Id)
    },
    async fetchExpenseById({
      commit
    }, Id) {
      const res = await axios.get(`/api/all/${Id}/`);
      commit('setExpense', res.data)
    },
    async editExpense(context, formData) {
      let data = JSON.parse(JSON.stringify(formData))
      console.log(data)
      await axios.put(`/api/all/${data.id}/`, data);
    }
  },
  mutations: {
    setExpenses(state, expenses) {
      return state.expenses = expenses
    },
    removeExpense(state, id) {
      state.expenses = state.expenses.filter(expense => expense.id !== id)
    },
    setExpense(state, expense) {
      return state.expense = expense
    }
  }
})
