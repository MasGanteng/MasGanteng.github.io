import { navs } from "./stores.js";
import { 
  footerSocMed, 
  footerPartnership, 
  copyright 
} from "../footer/stores.js"

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

  const navHeader = `
    <div class="container">
      <nav class="navbar">
        <a href="/">
            <img src="/assets/images/logo/logo.png" alt="Logo">
        </a>
        <div class="view-desktop">
          <ul>
            ${navs.map(nav=>`
            <li>
              <a href="${nav.navLink}">${nav.navText}</a>
            </li>
            `).join("")}
          </ul>
        </div>
        <div class="view-mobile">
          <a class="toggle-menu">
              <svg class="icon">
                  <use xlink:href="/assets/images/svg/utility-sprite.svg#burger"></use>
              </svg>
          </a>
        </div>
      </nav>
    </div>
  `
  const navMobile = `
    <div id="nav-menu" class="nav-menu">
      <div class="container">
          <ul class="nav-links-mobile">
              <li>
                  <a href="/" class="nav-link">
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/nav-sprite.svg#home"></use>
                      </svg>
                      <span>Home</span>
                  </a>
              </li>
            ${navs.map(nav => `
              <li>
                  <a href="${nav.navLink}" class="nav-link">
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/nav-sprite.svg#${nav.navIcon}"></use>
                      </svg>
                      <span>${nav.navText}</span>
                  </a>
              </li>
            `).join("")}
          </ul>

          <hr>

          <ul class="nav-links-sosmed">
              <li>
                  <a href="" class="nav-link">
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#facebook-square"></use>
                      </svg>
                      <span>Facebook</span>
                  </a>
              </li>
              <li>
                  <a href="" class="nav-link">
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#instagram"></use>
                      </svg>
                      <span>Instagram</span>
                  </a>
              </li>
          </ul>

          <hr>

          <div>
              <p class="font-smaller">Shop Partnership</p>
              <ul class="nav-partner">
                ${footerPartnership.map(partner => `
                  <li>
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#${partner.src}"></use>
                      </svg>
                  </li>
                `).join("")}
              </ul>
          </div>

          <div class="content text-center font-smaller">
              <p>copyright &copy; ${copyright} DB's Group</p>
          </div>
      </div>
    </div>
  `
  header.innerHTML += `
    ${navHeader}
    ${navMobile}
  `

  const activePage = location.href;
  // console.log(activePage);
  const activeLink = document.querySelectorAll('a')

  activeLink.forEach(active=>{
    if(active.href === activePage){
      active.classList.add('active');
    }
  })


  const 
      dataToggle = document.querySelector(".toggle-menu"),
      navMenu = document.querySelector("#nav-menu")

  dataToggle.addEventListener("click", function(){
      navMenu.classList.toggle("active")
  })
  if(navMenu.classList.contains('active')){
      console.log('bgf');
  }

  window.addEventListener("unload", function(){
    navMenu.classList.remove("active")
  })
};
