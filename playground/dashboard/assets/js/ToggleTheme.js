export const toggleTheme = () => {
  const themeData = document.querySelector("[data-theme]");
  const themeToggle = document.querySelector(".toggle-theme");

  const sun = themeToggle.querySelector("[data-sun]");
  const moon = themeToggle.querySelector("[data-moon]");

  themeToggle.onclick = () => {
    themeData.dataset.theme === "light"
      ? (themeData.dataset.theme = "dark")
      : (themeData.dataset.theme = "light");

    sun.classList.toggle("active");
    moon.classList.toggle("active");
  };
};
