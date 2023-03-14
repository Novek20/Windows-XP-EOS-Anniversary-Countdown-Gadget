// Declare the dock and undock event handlers.
System.Gadget.onDock = CheckDockState;
System.Gadget.onUndock = CheckDockState;

function CheckDockState() {
    var oGadgetUndocked = document.getElementById("undocked");
    var oGadgetDocked = document.getElementById("docked");

    var oBody = document.body.style;
    if (System.Gadget.docked) {
        oBody.width = 150;
        oBody.height = 150;

        oGadgetUndocked.style.display = "none";
        oGadgetDocked.style.display = "block";
    }
    else {
        oBody.width = 450;
        oBody.height = 150;
        
        oGadgetUndocked.style.display = "block";
        oGadgetDocked.style.display = "none";
    }

    RepositionText(System.Gadget.docked);
}

function RepositionText(docked) {
    var oGadgetText = document.getElementById("XPCountdown");
    var top = "90px";
    var width = "150px";
    if (docked) {
        oGadgetText.style.top = top;
        oGadgetText.style.left = "0px";
        oGadgetText.style.width = width;
    }
    else {
        oGadgetText.style.top = top;
        oGadgetText.style.left = "300px";
        oGadgetText.style.width = width;
    }
}