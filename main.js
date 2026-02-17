function updateHeaderHeight() {
  const header = document.querySelector("header");
  const beranda = document.querySelector(".beranda");

  const heightHeader = header.offsetHeight;
  beranda.style.setProperty("--header-height", heightHeader + "px");
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);
