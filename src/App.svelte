<script lang="ts">
  import Footer from "./Components/Footer.svelte";
  import TodoContainer from "./Components/TodoContainer.svelte";
</script>

<main>
  <h1 class="title">todo list</h1>
  <TodoContainer />
  <Footer />
</main>

<style>
  .title {
    font-size: 2rem;
    margin: 0px;
    color: #f5ebe0;
  }
</style>
