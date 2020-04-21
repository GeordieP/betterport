<script>
  export let trackDetails;
  export let onClose;

  function onCloseWrap(e) {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }
</script>

<style>
  .btrprt-track-modal {
    min-width: 30%;
    min-height: 40%;
    background: #262626;
    z-index: 1000 !important;
    animation: scale 0.3s ease;

    padding: 15px;
  }

  .btrprt-item {
    background: #373737;
  }

  .btrprt-foreground {
    color: #686868;
  }

  .spaceBetweenH {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @keyframes scale {
    0% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<div class="btrprt-track-modal" onClick={onCloseWrap}>
  <div class="spaceBetweenH">
    <h2>{trackDetails.artists} - {trackDetails.title}</h2>
    <button on:click={onClose} class="btrprt-foreground">CLOSE</button>
  </div>

  <ul>
    <li class="btrprt-item btrprt-foreground">Tags</li>
  </ul>
</div>
