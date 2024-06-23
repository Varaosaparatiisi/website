const sidebar = document.getElementById("sidebar");
const btnOpen = document.getElementById("burger");
const btnClose = document.getElementById("close");

btnOpen.onclick = function open (e) {
  sidebar.classList.add("show-sidebar");
  e.stopPropagation();
}

btnClose.onclick = function close (e) {
  sidebar.classList.remove("show-sidebar");
  e.stopPropagation();
}
