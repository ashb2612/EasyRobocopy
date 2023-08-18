function computeCommand() {
  console.log("produceCommand called")
  command = "robocopy.exe " + document.getElementById("source").value + " " + document.getElementById("destination").value
  updateDisplayedCommand(command)
}

function updateDisplayedCommand(cmd) {
    document.getElementById("computedCommand").innerText = cmd;
}

window.onload = computeCommand

// event listener for page changes
document.addEventListener("input", computeCommand);
//document.getElementById("id1").addEventListener(input, produceCommand);