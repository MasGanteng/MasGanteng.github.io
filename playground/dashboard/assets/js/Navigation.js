export const nav = () => {
  const navHasMenu = document.getElementsByClassName("has-menu");

  for (let i = 0; i < navHasMenu.length; i++) {
    navHasMenu[i].addEventListener("click", function () {
      const navMenu = this.nextElementSibling;
      navMenu.classList.toggle("active");
    });
  }
};
