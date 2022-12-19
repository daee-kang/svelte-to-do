<script lang="ts">
  import Footer from "./Components/Footer.svelte";
  import TodoContainer from "./Components/TodoContainer.svelte";
</script>

<main class="app">
  <h1 class="title">todo list</h1>
  <TodoContainer />
  <Footer />
</main>

<style>
  @media only screen and (max-width: 600px) {
    .app {
      width: 100vw;
      height: 100vh;
      max-height: -webkit-fill-available;
      display: flex;
      flex-direction: column;
    }
  }
  .title {
    font-size: 2rem;
    margin: 0px;
    color: #f5ebe0;
  }
</style>
