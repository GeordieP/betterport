<script>
  import ModalInner from "./modalInner.svelte";

  export let trackDetails;
  export let onClose;
</script>

<style>
  .btrprt-modalWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000 !important;
  }

  .btrprt-flexCenter {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
</style>

<div class="btrprt-modalWrap btrprt-flexCenter">
  <ModalInner {trackDetails} {onClose} />
</div>
