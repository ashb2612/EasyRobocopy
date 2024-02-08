function computeCommand() {
  //console.log("produceCommand called")
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

window.onload = computeCommand

// event listener for page changes
document.addEventListener("input", computeCommand);