<template>
  <div class="container">
    <form>
      <fieldset>
        <legend>Edit Expenses</legend>
        <div class="form-group">
          <label class="form-control-label">Expenses Name</label>
          <input v-model="exp.name" type="text" class="form-control" pla />
        </div>
        <div class="form-group">
          <label class="form-control-label">Amount</label>
          <input v-model="exp.amount" type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label class="form-control-label">Date</label>
          <input v-model="exp.date" type="date" class="form-control" />
        </div>
        <button @click.prevent="editExp" type="submit" class="btn btn-success">Submit</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditPage",
  data() {
    return {
      form: {
        name: null,
        amount: null,
        date: null
      }
    };
  },
  computed: {
    ...mapState({
      exp: state => state.expense
    })
    // ...mapGetters(["expense"])
  },
  created() {
    const Id = this.$route.params.id;
    this.fetchExpenseById(Id);
    console.log(Id);
  },
  methods: {
    ...mapActions(["fetchExpenseById", "editExpense"]),

    editExp() {
      this.editExpense(this.exp).then(() => {
        this.$toasted.success("edit successful", {
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