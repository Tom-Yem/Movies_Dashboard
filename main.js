let drawerSurface = document.getElementById("drawerSurface");
let drawer = document.getElementById("drawer");

drawerOpener.onclick = (e) => {
  drawerSurface.style.width = "100%";
  drawerSurface.style.opacity = "1";
  drawer.style.transform = "translateX(0%)";
};

drawer.onclick = (e) => e.stopPropagation();

drawerSurface.onclick = (e) => {
  drawerSurface.style.width = "0";
  drawerSurface.style.opacity = "0";
  drawer.style.transform = "translateX(-100%)";
};
