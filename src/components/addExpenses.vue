<template>
  <div class="container">
    <form>
      <fieldset>
        <legend>Add Expenses</legend>
        <div class="form-group">
          <label class="form-control-label">Expenses Name</label>
          <input v-model="form.name" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label class="form-control-label">Amount</label>
          <input v-model="form.amount" type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label class="form-control-label">Date</label>
          <input v-model="form.date" type="date" class="form-control" />
        </div>
        <button @click.prevent="addExp" type="submit" class="btn btn-success">Submit</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: null,
        amount: null,
        date: null
      }
    };
  },
  methods: {
    ...mapActions(["addExpenses"]),
    addExp() {
      this.addExpenses(this.form).then(() => {
        (this.form.name = null),
          (this.form.amount = null),
          (this.form.date = null),
          this.$toasted.success("expense added successful", {
            theme: "bubble",
            position: "top-center",
            duration: 4000
          });
        this.$router.push({ name: "ExpensesPage" });
      });
    }
  }
};
</script>
<style scoped>
</style>