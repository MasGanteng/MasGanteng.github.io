import { navs } from "./datas.js";

export const navList = () => {
  const header = document.querySelector(".my-header")
  const navbar = document.querySelector(".navbar > ul");
  // navs.map((nav) => {
  //   const { navText, navLink, navActive:active="" } = nav;
    
  //   navbar.innerHTML += `
  //       <li>
  //           <a 
  //               href="${navLink}"
  //               >${navText}</a
  //           >
  //       </li>    
  //   `;
  // });

  header.innerHTML += `
    <div class="container">
      <nav class="navbar">
        <a href="/">
            <img src="/assets/images/logo/logo.png" alt="Logo">
        </a>
        <ul>
          ${navs.map(nav=>`
          <li>
            <a href="${nav.navLink}">${nav.navText}</a>
          </li>
          `).join("")}
        </ul>
      </nav>
    </div>
  `
  const activePage = location.href;
  // console.log(activePage);
  const activeLink = document.querySelectorAll('a')

  activeLink.forEach(active=>{
    if(active.href === activePage){
      active.classList.add('active');
    }})
};
