// import { MyFooter } from "/components/footer/MyFooter.js";
import { navList } from "../../components/header/index.js";
import { myFooter } from "../../components/footer/index.js";

// customElements.define("my-footer", MyFooter);

navList();
myFooter();

window.onscroll = function () {
  const header = document.querySelector("header");
  const headerScrolled = 200

  window.scrollY > headerScrolled
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
};
