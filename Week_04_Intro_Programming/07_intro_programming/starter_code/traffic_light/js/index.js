document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateOrange;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  clearText();
  document.getElementById('stopLight').style.backgroundColor = "red";

  $("#stopLight").css("background-color", "red");
  
  document.getElementById("pText").innerHTML = "Red Stop Light";
  document.getElementById('pText').style.backgroundColor = "red";
  document.getElementById('pText').style.color = "white";
}

function illuminateOrange() {
  clearLights();
  clearText ();
  document.getElementById('slowLight').style.backgroundColor = "orange";
  document.getElementById("pText").innerHTML = "Orange Stop Light";
  document.getElementById('pText').style.backgroundColor = "orange";
  document.getElementById('pText').style.color = "white";
}

function illuminateGreen() {
  clearLights();
  clearText();
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById("pText").innerHTML = "Green Stop Light";
  document.getElementById('pText').style.backgroundColor = "green";
  document.getElementById('pText').style.color = "white";
}


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

function clearText () {
	document.getElementById("pText").innerHTML = "Press the Button!";
}