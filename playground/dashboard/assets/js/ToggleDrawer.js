export const toggleDrawer = () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleNavDrawer = document.querySelector(".toggle-navdrawer");
  const navDrawer = document.querySelector("[data-sidebar]");
  const main = document.querySelector("[data-main]");
  const closeNav = sidebar.querySelector(".close-nav");
  const backDrop = sidebar.querySelector(".backdrop");

  toggleNavDrawer.onclick = () => {
    navDrawer.classList.toggle("active");
    main.classList.toggle("active");
  };

  closeNav.onclick = () => {
    navDrawer.classList.remove("active");
  };

  backDrop.onclick = () => {
    navDrawer.classList.remove("active");
  };
};
