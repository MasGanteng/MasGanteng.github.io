import { navs } from "./datas.js";

export const navList = () => {
  const navbar = document.querySelector(".navbar > ul");
  navs.map((nav) => {
    const { navText, navLink, navActive:active="" } = nav;
    
    navbar.innerHTML += `
        <li>
            <a 
                href="${navLink}"
                class="${active}"
                >${navText}</a
            >
        </li>    
    `;
  });
};
