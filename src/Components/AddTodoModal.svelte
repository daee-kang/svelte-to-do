<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div class="modal-container" transition:fade={{ duration: 100 }}>
  <div class="modal" />
</div>

<style>
  .modal-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .modal {
    height: 200px;
    width: 600px;
    background-color: #1a1a1a;
  }
</style>
