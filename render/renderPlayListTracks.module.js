export function renderPlayListTracks(anyTracks) {
  const trackListElement = document.createElement("ul");
  for (let i = 0; i < anyTracks.length; i++) {
    const trackElement = renderTrack(anyTracks[i]);
    trackListElement.append(trackElement);
  }
  document.body.append(trackListElement);
}
