class Attribute {
  constructor(isEnabled, value) {
      this.isEnabled = isEnabled;
      this.value = value;
  }
}

function init() {
  var args = {
    s: new Attribute(true, 1),
    e: new Attribute()
  }

  console.log(args.s.value)

  computeCommand()
}

function computeCommand() {
  command = "robocopy.exe " + document.getElementById("arg-source").value + " " + document.getElementById("arg-destination").value
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