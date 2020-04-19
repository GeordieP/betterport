function get_track_info(track_root) {
  // TODO: column ordering, and which columns are shown, are user preference
  function get_column_value(column_number) {
    return track_root.children[2].children[column_number].innerText;
  }

  function get_track_url() {
    return track_root.children[2].children[0].children[0].href;
  }

  return {
    title: get_column_value(0),
    url: get_track_url(),
    artists: get_column_value(1),
    remixers: get_column_value(2),
    genre: get_column_value(3),
    bpm: get_column_value(4),
    length: get_column_value(5)
  };
}

function get_all_tracks(formatter) {
  return formatter(
    document.getElementsByClassName("bucket-item ec-item track")
  );
}

function add_button_to_track(track_root) {
  const newChild = document.createElement("button");
  newChild.appendChild(document.createTextNode("TEST"));
  newChild.className = "btrprt_track_test_btn";

  newChild.addEventListener("click", e => {
    e.preventDefault();
    const track = get_track_info(track_root);
    console.log(`Clicked on ${track.artists} - ${track.title}`);
  });

  track_root.children[3].children[0].children[0].appendChild(newChild);
}

window.onload = function on_page_load() {
  const tracks = get_all_tracks(Array.from);
  tracks.forEach(add_button_to_track);
};
