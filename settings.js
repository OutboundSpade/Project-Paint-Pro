//ALL HAIL LUIS!

//Syncronized flashing(true) or randomized flashing(false)
let SyncronizedFlashingAd = true;

//Enable StarField Background (true/false)
let EnableStarField = false;

//Links to change for "START DOWNLOAD":
let links = [
  "https://www.java.com/ru/download/",
  "http://adfoc.us/serve/?id=27122876253088",
  "https://www.pdfconverter.com/downloads/",
  "https://chrome.google.com/webstore/detail/roblox-vs-minecraft-hd-wa/dbefjmiejobjbhkgbbmpldjmfabbdmai?hl=ar",
  "https://www.goodreads.com/book/show/19251985-how-to-make-your-computer-faster", "https://download.cnet.com/Hard-Drive-Inspector-Professional/3001-2086_4-10332580.html",
  "https://clippy.ru.uptodown.com/windows/download",
  "https://sisco.ru.uptodown.com/windows/download",
  "https://optifine.net/adloadx?f=OptiFine_1.16.3_HD_U_G3.jar&x=bd26",

];

function downloadNow() {
  let link = links[Math.floor(Math.random() * links.length)];
  if (confirm(`Are you sure you want to leave the page?\nYou will be redirected to ${link}\nTRAVEL AT YOUR OWN RISK!`)) {
    window.open(link);
  }
}

// alert("WARNING!: WINDOWS COMPUTER VIRUS DETECTED!");
// alert("WARNING!: DO NOT ENTER THIS SITE IF YOU ARE UNDER 18 YEARS OLD ;)");