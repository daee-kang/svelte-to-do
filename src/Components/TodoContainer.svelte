<script lang="ts">
  import { todos, addTodoModalOpen } from "../stores";
  import BlurableDiv from "./BlurableDiv.svelte";
  import AddTodoModal from "./AddTodoModal.svelte";

  const toggleTodoModal = () => ($addTodoModalOpen = !$addTodoModalOpen);
</script>

<div class="body">
  <div class="content">
    <button on:click={toggleTodoModal}>
      {$addTodoModalOpen ? "cancel" : "add todo"}
    </button>
    <div class="todo-body">
      <BlurableDiv blur={$addTodoModalOpen}>
        <div class="todos">
          <div>my todos:</div>
          {#each $todos as todo}
            <div>{todo.description}</div>
          {/each}
        </div>
      </BlurableDiv>
      {#if $addTodoModalOpen}
        <AddTodoModal />
      {/if}
    </div>
  </div>
</div>

<style>
  .body {
    height: 80vh;
    width: min(800px, 80vw);
    background-color: #e3d5ca;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 600px) {
    .body {
      width: 100vw;
      flex: 1;
      height: undefined;
      margin-bottom: 8px;
    }
  }

  .content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 8px;
  }

  .todo-body {
    flex: 1;
    position: relative;
  }

  .todos {
    color: #242424;
  }
</style>
