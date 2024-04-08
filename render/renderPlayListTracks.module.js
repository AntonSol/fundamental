export function renderPlayListTracks(anyTracks) {
  const trackListElement = document.createElement("ul");
  for (let i = 0; i < anyTracks.length; i++) {
    const trackElement = renderTrack(anyTracks[i]);
    trackListElement.append(trackElement);
  }
  document.body.append(trackListElement);
}

function renderTrack(anyTrack) {
  const trackElement = document.createElement("li");
  trackElement.style.listStyle = "none";

  const coverElement = document.createElement("img");
  coverElement.src = anyTrack.trackCoverImgUrl;
  coverElement.style.width = "50px";

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  trackElement.append(
    coverElement,
    audio,
    anyTrack.artistName + ": " + anyTrack.trackTitle
  );
  return trackElement;
}
