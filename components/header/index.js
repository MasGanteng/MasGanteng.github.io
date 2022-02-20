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
  const activePage = location.href;
  // console.log(activePage);
  const activeLink = navbar.querySelectorAll('a')

  activeLink.forEach(active=>{
    if(active.href === activePage){
      active.classList.add('active');
    }})
};
