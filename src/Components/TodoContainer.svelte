<script lang="ts">
  import { todos } from "../stores";
</script>

<div class="body">
  <button on:click={() => todos.add("test")}>add todo</button>
  <button on:click={() => todos.add("test")}>remove todo</button>
  <button on:click={() => todos.clearAll()}>clear</button>

  <div>
    {#each $todos as todo}
      <div>
        {todo.description}
      </div>
    {/each}
  </div>
</div>

<style>
  .body {
    height: 80vh;
    width: min(800px, 80vw);
    background-color: #e3d5ca;
    margin-bottom: 1rem;
  }
</style>
