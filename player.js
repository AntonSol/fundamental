const playList = {
  playListInfo: {
    title: "Hip-hop hits",
    coverImgUrl: "./cover.avif",
  },
  tracks: [
    {
      trackId: "1",
      artistName: "Eminem",
      crackTitle: "Rap God",
      trackFileUrl: "./eminem_-_rap_god_(muztune.me).mp3",
      trackCoverImgUrl: "./eminem.jpg",
    },
    {
      trackId: "2",
      artistName: "50cent",
      crackTitle: "In ds club",
      trackFileUrl: "./50cent_-_in_da_club_(muztune.me).mp3",
      trackCoverImgUrl: "./50cent.jpg",
    },
  ],
};

const playListTitleElement = document.createElement("h1");
playListTitleElement.innerText = playList.playListInfo.title;
document.body.append(playListTitleElement);
