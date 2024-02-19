class Option {
  constructor(isEnabled, value) {
      this.isEnabled = isEnabled;
      this.value = value;
  }
}

// store all options
var options = {}

// updates all checkboxes using the stored options
function updateOptionsGui() {
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

// listen for events and update the relevant Option
function inputChanged(ev) {
  // listen for events and update the relevant Option
  if (ev.srcElement.type == "checkbox") {
    options[ev.srcElement.id].isEnabled = ev.srcElement.checked;
  }
  else if (ev.srcElement.type == "text") {
    options[ev.srcElement.id].value = ev.srcElement.value;
  }
}

// generates the string to be displayed
function computeCommand() {
  command = "robocopy.exe "

  for (o in options) {
    if (o == 'pathSource') {
      command = command + options.pathSource.value + " "
    }
    else if (o == 'pathDestination' ) {
      command = command + options.pathDestination.value + " "
    }
    else {
      // is an option    
      if (options[o].isEnabled) {
            command = command + " /" + o.toUpperCase();
      }
    }
  }

  return command;
}

// updates the outputted command
function updateDisplayedCommand() {
    cmd = computeCommand()
    document.getElementById("computedCommand").innerText = cmd;
}

function copyToClipboard() {
  var cmd = document.getElementById("computedCommand");
  navigator.clipboard.writeText(cmd.innerHTML);
}


// initialise
function init() {
  
  // sample options for testing
  options.pathSource        = new Option(true, "c:\\src")
  options.pathDestination   = new Option(true, "c:\\dest")
  options.s                 = new Option(false, null)
  options.e                 = new Option(false, null)
  options.lev               = new Option(false, 5)

  updateOptionsGui()
  updateDisplayedCommand()
}

// event listeners
window.onload = init
document.addEventListener("input", inputChanged);
document.addEventListener("input", updateDisplayedCommand);