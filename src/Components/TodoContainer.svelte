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
    background-color: #e8edeb;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
    overflow: hidden;
  }

  .todo-body {
    flex: 1;
    position: relative;
  }

  .todos {
    color: rgb(46, 52, 61);
  }
</style>
