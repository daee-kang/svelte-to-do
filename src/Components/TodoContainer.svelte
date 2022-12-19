<script lang="ts">
  import { todos } from "../stores";
</script>

<div class="body">
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
