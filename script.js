//ALL HAIL LUIS!
let bgcolor = '#00ff00';
let x = document.getElementsByClassName("downloadnow");
if(SyncronizedFlashingAd) {
  setInterval(() => {
    Object.values(x).forEach((item, i) => {
      flashDownload(item);
    });
  }, 1000);
}else {
  Object.values(x).forEach((item, i) => {
    setInterval(() => {
      flashDownload(item);
    },getRndInteger(30,300));
  });
  
}

function flashDownload(item) {
  bgcolor = bgcolor == '#00ff00' ? 'yellow' : '#00ff00';
  item.style.setProperty("background-color", bgcolor);
  if(bgcolor == 'yellow') {
    item.style.setProperty('text-decoration', 'underline');
    item.style.setProperty('font-weight', 'bold');
  }else {
    item.style.setProperty('text-decoration', 'none');
    item.style.setProperty('font-weight', 'normal');
  }
}



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// window.onload = function() {
//     document.getElementById("my_audio").play();
// }
