function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    if (event.clientY < 50) {
      // Remove this event listener
      document.removeEventListener("mouseout", onMouseOut);
  
      // Show the popup
      document.getElementById("popup").style.display = "block";
    }
  }
  
document.addEventListener("mouseout", onMouseOut);

function exitPopUp(){

    document.getElementById("popup").style.display = "none";
}