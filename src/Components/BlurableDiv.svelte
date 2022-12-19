<script lang="ts">
  export let blur: boolean = false;
</script>

<div class="default" class:show={blur}>
  <slot />
</div>

<style>
  .default {
    transition: filter 0.2s;
    filter: blur(0);
  }

  .show {
    filter: blur(1px);
  }
</style>
