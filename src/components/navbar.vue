<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link :to="{name:'ExpensesPage'}" class="navbar-brand">Expenses Tracker</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name:'addExpenses'}" class="nav-link">Add New Expenses</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>