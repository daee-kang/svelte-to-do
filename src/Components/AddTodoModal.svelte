<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { addTodoModalOpen, todos } from "../stores";

  let todoDescription = "";

  const addTodo = (e: SubmitEvent) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const description = formData.get("description");
    if (description == null || description === "") return;

    todos.add(description as string);
    $addTodoModalOpen = false;
  };
</script>

<div
  class="modal-container"
  in:fly={{ y: 100, duration: 300 }}
  out:fly={{ y: 100, duration: 300 }}
>
  <div class="modal">
    <form on:submit|preventDefault={addTodo}>
      <input
        class="description-input"
        name="description"
        bind:value={todoDescription}
        placeholder="i want to [ . . . ]"
      />
    </form>
  </div>
</div>

<style>
  .modal-container {
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .modal {
    height: fit-content;
    width: 90%;
    background-color: rgb(25, 27, 31);
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
  }

  .description-input {
    box-sizing: border-box;
    width: 100%;
    font-size: 60px;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    letter-spacing: 0.2rem;
    background-color: #e8edeb;
    color: rgb(25, 27, 31);
  }

  @media only screen and (max-width: 600px) {
    .description-input {
      font-size: 40px;
      padding: 0.25rem 1rem;
      letter-spacing: 0.1rem;
    }
  }
</style>
