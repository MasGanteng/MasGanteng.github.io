import { navs } from "./datas.js";

export const navList = () => {
  const navbar = document.querySelector(".navbar > ul");
  navs.map((nav) => {
    const { navText, navLink, navActive:active="" } = nav;
    
    navbar.innerHTML += `
        <li>
            <a 
                href="${navLink}"
                >${navText}</a
            >
        </li>    
    `;
  });
  const activePage = window.location.pathname;
  const activeLink = navbar.querySelectorAll('a')

  activeLink.forEach(active=>{
    if(active.href.includes(`${activePage}`)){
      active.classList.add('active');
    }})
};
