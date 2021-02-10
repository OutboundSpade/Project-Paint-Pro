// ALL HAIL LUIS!

let bgcolor = '#00ff00';
let x = document.getElementsByClassName("downloadnow");
if (SyncronizedFlashingAd) {
  setInterval(() => {
    Object.values(x).forEach((item, i) => {
      flashDownload(item);
    });
  }, 1000);
} else {
  Object.values(x).forEach((item, i) => {
    setInterval(() => {
      flashDownload(item);
    }, getRndInteger(400, 1000));
  });

}

function flashDownload(item) {
  bgcolor = bgcolor == '#00ff00' ? 'yellow' : '#00ff00';
  item.style.setProperty("background-color", bgcolor);
  if (bgcolor == 'yellow') {
    item.style.setProperty('text-decoration', 'underline');
    item.style.setProperty('font-weight', 'bold');
  } else {
    item.style.setProperty('text-decoration', 'none');
    item.style.setProperty('font-weight', 'normal');
  }
}
// zeisthevaluethatshallnotbechanged = Math.floor((Math.random() * 100) + 0);
// document.getElementById('progress').setAttribute("aria-valuenow", zeisthevaluethatshallnotbechanged);
// document.getElementById('progress').setAttribute("style", `font-size:200%;width:${document.getElementById('progress').getAttribute("aria-valuenow")}%`);

let totalModules;
getPreferences((data) => {
  totalModules = JSON.parse(data)["number_of_modules"];
});

function getPreferences(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'preferences.json', true); // Replace 'appDataServices' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}