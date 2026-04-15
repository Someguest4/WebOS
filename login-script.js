const sheetURL = "https://docs.google.com/spreadsheets/d/1EHz9gkI3FCC8UuZQEn7u2D5ug8opf2P8N_Q3Xk0E3fM/gviz/tq?tqx=out:csv&sheet=Sheet1";

fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => logResponse(csvText));
  

function logResponse(csvText) {
  console.log(csvText);  
  globalThis.csvText = csvText;
}


function login() {
    var username = "\"" + document.getElementById("username").value + "\"";
    var password = "\"" + document.getElementById("password").value + "\"";
    if (csvText.includes( username + "," + password)) {
        window.open("desktop.html","_self");
    } else {
        alert("Invalid username or password");
    }
}