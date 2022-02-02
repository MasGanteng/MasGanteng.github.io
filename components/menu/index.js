import { menus } from "./datas.js";

export const menuList = () => {
  const menuGrid = document.querySelector(".products-lists-grid > ul");
  menus.map((menu) => {
    const { image, title, price, link } = menu;
    
    menuGrid.innerHTML += `
        <li>
          <figure>
            <img src="${image}" alt="${title}"/>
            <figcaption>
              <p class="content">${title}</p>
              <p><strong>Rp ${price}</strong></p>
              <a 
                href="${link}"
                class="btn btn-outline-light btn-pill"
                >See Details</a
              >
            </figcaption>
          </figure>
        </li>    
    `;
  });
};