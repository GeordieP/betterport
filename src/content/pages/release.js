import Modal from "./modal.svelte";

let modalInstance = null;

function destroyModal() {
  if (modalInstance != null) {
    modalInstance.$destroy();
    modalInstance = null;
  }
}

function spawnModal(trackDetails) {
  destroyModal();

  modalInstance = new Modal({
    target: document.body,
    props: {
      trackDetails,
      onClose: destroyModal,
    },
  });
}

function getTrackInfo(trackRoot) {
  // TODO: column ordering, and which columns are shown, are user preference
  function getColValue(colNum) {
    return trackRoot.children[2].children[colNum].innerText;
  }

  function getTrackUrl() {
    return trackRoot.children[2].children[0].children[0].href;
  }

  return {
    title: getColValue(0),
    url: getTrackUrl(),
    artists: getColValue(1),
    remixers: getColValue(2),
    genre: getColValue(3),
    bpm: getColValue(4),
    length: getColValue(5),
  };
}

function getAllTracks(formatter) {
  return formatter(
    document.getElementsByClassName("bucket-item ec-item track")
  );
}

function addBtnToTrack(trackRoot) {
  const newChild = document.createElement("button");
  newChild.appendChild(document.createTextNode("TEST"));
  newChild.className = "btrprt_track_test_btn";

  newChild.addEventListener("click", (e) => {
    e.preventDefault();

    spawnModal(getTrackInfo(trackRoot));
  });

  trackRoot.children[3].children[0].children[0].appendChild(newChild);
}

const tracks = getAllTracks(Array.from);
tracks.forEach(addBtnToTrack);
