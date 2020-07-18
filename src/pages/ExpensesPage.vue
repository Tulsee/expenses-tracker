<template>
  <div class="jumbotron container mt-5">
    <h1>Expenses</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Expense Name</th>
          <th scope="col">Expenses Amount</th>
          <th scope="col">Expenses date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="expense in expenses" :key="expense.id">
        <tr class="table-info">
          <td>{{expense.name}}</td>
          <td>{{expense.amount}}</td>
          <td>{{expense.date}}</td>
          <td>
            <router-link
              :to="{name:'EditPage', params:{id:expense.id}}"
              type="button"
              class="btn btn-warning btn-sm mr-2"
            >Edit</router-link>
            <button
              @click.prevent="deleteExp(expense.id)"
              type="button"
              class="btn btn-danger btn-sm"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["expenses"])
  },
  created() {
    this.fetchExpenses();
  },
  methods: {
    ...mapActions(["fetchExpenses", "deleteExpense"]),

    deleteExp(id) {
      this.deleteExpense(id).then(() => {
        this.$toasted.error("Deleted successfully", {
          theme: "bubble",
          position: "top-center",
          duration: 4000
        });
      });
      // console.log(id);
      // this.$store.dispatch("deleteExpense", id);
    }
  }
};
</script>
<style scoped>
</style>