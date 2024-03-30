const playList = {
  playListInfo: {
    title: "Hip-hop hits",
    coverImgUrl: "./cover.avif",
  },
  tracks: [
    {
      trackId: "1",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "./eminem_-_rap_god_(muztune.me).mp3",
      trackCoverImgUrl: "./eminem.jpg",
    },
    {
      trackId: "2",
      artistName: "50cent",
      trackTitle: "In ds club",
      trackFileUrl: "./50cent_-_in_da_club_(muztune.me).mp3",
      trackCoverImgUrl: "./50cent.jpg",
    },
  ],
};

// const playListTitleElement = document.createElement("h1");
// playListTitleElement.innerText = playList.playListInfo.title;
// document.body.append(playListTitleElement);

// const playListCaverElement = document.createElement("img");
// playListCaverElement.src = playList.playListInfo.coverImgUrl;
// playListCaverElement.style.width = "150px";
// document.body.append(playListCaverElement);

// const trackListElement = document.createElement("ul");
// for (let i = 0; i < playList.tracks.length; i++) {
//   const trackElement = document.createElement("li");

//   const trackCoverElement = document.createElement("img");
//   trackCoverElement.src = playList.tracks[i].trackCoverImgUrl;

//   trackElement.append(trackCoverElement);
//   trackElement.append(
//     playList.tracks[i].artistName + ": " + playList.tracks[i].trackTitle
//   );
//   trackListElement.append(trackElement);
//   trackCoverElement.style.width = "50px";
// }

// document.body.append(trackListElement);

function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTracksList(anyPlayList.tracks);
}
function renderPlayListHeader() {
  const playListTitleElement = document.createElement("h1");
  playListTitleElement.innerText = playList.playListInfo.title;
  document.body.append(playListTitleElement);

  const playListCaverElement = document.createElement("img");
  playListCaverElement.src = playList.playListInfo.coverImgUrl;
  playListCaverElement.style.width = "150px";
  document.body.append(playListCaverElement);
}

function renderTracksList(anyTracks) {
  const trackListElement = document.createElement("ul");
  for (let i = 0; i < playList.tracks.length; i++) {
    const trackElement = createTrack(anyTracks[i]);

    const trackCoverElement = document.createElement("img");
    trackCoverElement.src = playList.tracks[i].trackCoverImgUrl;

    trackListElement.append(trackElement);
    trackCoverElement.style.width = "50px";
  }
  document.body.append(trackListElement);
}
function createTrack(anyTrack) {
  const trackElement = document.createElement("li");

  const trackCoverElement = document.createElement("img");
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = "50px";

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;
  trackElement.append(trackCoverElement);
  trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle);
  trackElement.append(audio);
  return trackElement;
}
renderPlayList(playList);
