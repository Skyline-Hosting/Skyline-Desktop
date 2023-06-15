function dim() {
    document.getElementById("body").style.filter = "brightness(0.2)";
    document.getElementById("body").style.pointerEvents = "none";
    document.getElementById("body").style.margin = "0"; // For some reason, Electron sets margin to 10 when this function is active
}