// data
const info = {
  title: "it-incubator",
  graduatesCoun: 2000,
  areYouChampion: true,
  technologies: ["Front", "Back", "DevOps"],
};
//const title = "it-incubator";
//const graduatesCount = 2000;
//const areYouChampion = true;
// render
let pageTitleElement = document.createElement("h1");
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement("input");
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement("input");
areYouChampionElement.type = "checkbox";
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);
