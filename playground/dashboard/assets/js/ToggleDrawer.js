export const toggleDrawer = () => {
  const toggleNavDrawer = document.querySelector(".toggle-navdrawer");
  const navDrawer = document.querySelector("[data-sidebar]");
  const main = document.querySelector("[data-main]");
  
  toggleNavDrawer.onclick = () => {
    navDrawer.classList.toggle("active");
    main.classList.toggle("active");
  };
};
