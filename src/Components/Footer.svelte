<script type="ts">
  import svelteLogo from "../assets/svelte.svg";
</script>

<div class="footer">
  built with
  <a
    class="svelte-logo"
    href="https://svelte.dev"
    target="_blank"
    rel="noreferrer"
  >
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
</div>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5ebe0;
  }

  .svelte-logo {
    padding-left: 8px;
  }
</style>
