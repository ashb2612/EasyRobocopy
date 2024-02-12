class Option {
  constructor(isEnabled, value) {
      this.isEnabled = isEnabled;
      this.value = value;
  }
}

function init() {
  var options = {
    s: new Option(true, 1),
    e: new Option()
  }

  console.log(options.s.value)

  computeCommand()
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

// event listeners
window.onload = init
document.addEventListener("input", computeCommand);