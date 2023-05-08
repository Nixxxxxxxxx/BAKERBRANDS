function openNav() {
  
  document.getElementById("mySidenav").style.width = "160px";
  document.getElementById("mySidenav").style.opacity = "1";
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
