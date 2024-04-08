export function renderPlayListHeader(anyPlayListInfo) {
  const playListCaverElement = document.createElement("img");
  playListCaverElement.src = anyPlayListInfo.coverImgUrl;
  playListCaverElement.style.width = "150px";
  document.body.append(playListCaverElement);
  const playListHeaderTitleElement = document.createElement("h2");
  playListHeaderTitleElement.append(anyPlayListInfo.title);
  document.body.append(playListHeaderTitleElement);
}
