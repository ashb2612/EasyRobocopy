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

function computeCommand() {
  command = "robocopy.exe " + document.getElementById("pathSource").value + " " + document.getElementById("pathDestination").value
  updateDisplayedCommand(command)
}


function updateDisplayedCommand(cmd) {
    document.getElementById("computedCommand").innerText = cmd;
}

function copyToClipboard() {
  var cmd = document.getElementById("computedCommand");
  navigator.clipboard.writeText(cmd.innerHTML);
}


function init() {
  // initialise everything

  // sample options for testing
  options.s = new Option(false, undefined),
  options.e = new Option()
  options.lev = new Option(true, 5)

  updateOptionsGui()
  computeCommand()
}

// event listeners
window.onload = init
document.addEventListener("input", computeCommand);