class Option {
  constructor(isEnabled, value) {
      this.isEnabled = isEnabled;
      this.value = value;
  }
}

// store all options
var options = {}

function updateOptionsGui() {
  // updates all checkboxes using the stored options
  for (o in options) {
    if (options[o].isEnabled === true) {
      // is true
      document.getElementById(o).checked = true;
    }
    else {
      // is false or undefined
      document.getElementById(o).checked = false;
    }
  }
}

function inputChanged(ev) {
  //console.log(myEvent);
  //console.log(myEvent.srcElement.id);
  //console.log(myEvent.srcElement.type);
  //console.log(myEvent.srcElement.checked);

  if (ev.srcElement.type == "checkbox") {
    options[ev.srcElement.id].isEnabled = ev.srcElement.checked;
  }
  else if (ev.srcElement.type == "text") {
    options[ev.srcElement.id].value = ev.srcElement.value;
  }
}

function computeCommand() {
  command = "robocopy.exe " + document.getElementById("pathSource").value + " " + document.getElementById("pathDestination").value;
  return command;
}


function updateDisplayedCommand() {
    cmd = computeCommand()
    document.getElementById("computedCommand").innerText = cmd;
}

function copyToClipboard() {
  var cmd = document.getElementById("computedCommand");
  navigator.clipboard.writeText(cmd.innerHTML);
}


function init() {
  // initialise

  // sample options for testing
  options.pathSource        = new Option(true, "c:\\src")
  options.pathDestination   = new Option(true, "c:\\dest")
  options.s                 = new Option(false, undefined),
  options.e                 = new Option()
  options.lev               = new Option(true, 5)

  updateOptionsGui()
  updateDisplayedCommand()
}

// event listeners
window.onload = init
document.addEventListener("input", inputChanged);
document.addEventListener("input", updateDisplayedCommand);