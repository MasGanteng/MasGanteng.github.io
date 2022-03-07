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
    <div class="container view-desktop">
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


    <div class="view-desktop">
        <header>
            <nav class="navbar container">
                <a href="/">
                    <img src="/assets/images/logo/logo.png" alt="Logo">
                </a>
                <ul></ul>
            </nav>
        </header>
    </div>

    <div class="view-mobile">
        <header>
            <nav class="navbar container">
                <a href="/" class="logo-mobile">
                    <img src="/assets/images/logo/logo.png" alt="Logo">
                </a>
                <a class="toggle-menu" data-toggle="nav-menu">
                    <svg class="icon">
                        <use xlink:href="/assets/images/svg/utility-sprite.svg#burger"></use>
                    </svg>
                </a>
            </nav>
        </header>
    </div>


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
            ${navs.map(nav=>`
              <li>
                  <a href="${nav.navLink}" class="nav-link">
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/nav-sprite.svg#${nav.navIcon}"></use>
                      </svg>
                      <span>${nav.navText}</span>
                  </a>
              </li>
            `).join("")}
          </ul> <!-- Navigation -->

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
          </ul> <!-- Sosmed -->

          <hr>

          <div>
              <p class="font-smaller">Shop Partnership</p>
              <ul class="nav-partner">
                  <li>
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#go-food"></use>
                      </svg>
                  </li>
                  <li>
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#shopee-food"></use>
                      </svg>
                  </li>
                  <li>
                      <svg class="icon">
                          <use xlink:href="/assets/images/svg/socmed-sprite.svg#grab-food"></use>
                      </svg>
                  </li>
              </ul>
          </div> <!-- Partnership -->

          <div class="content text-center font-smaller">
              <p>copyright &copy; 2022 DB's Group</p>
          </div> <!-- Copyright -->
      </div>
    </div>
  `
  const activePage = location.href;
  // console.log(activePage);
  const activeLink = document.querySelectorAll('a')

  activeLink.forEach(active=>{
    if(active.href === activePage){
      active.classList.add('active');
    }})


    const 
    dataToggle = document.querySelector("[data-toggle]"),
    navMenu = document.querySelector("#nav-menu")

dataToggle.addEventListener("click", function(){
    navMenu.classList.toggle("active")
})
if(navMenu.classList.contains('active')){
    console.log('bgf');
}
};
