let drawerSurface = document.getElementById("drawerSurface");
let drawer = document.getElementById("drawer");

drawerOpener.onclick = () => {
  let drawerSurface = document.getElementById("drawerSurface");
  drawerSurface.style.display = "block";
};

drawerSurface.onclick = () => (drawerSurface.style.display = "none");

//TODO: stop event propagation on drawer
//TODO: make slidable animation
//TODO: take care of drawer width on landscape view
//TODO: check nav scrollability on drawer
