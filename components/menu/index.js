import { menus } from "./datas.js";

export const menuList = () => {
  const menuGrid = document.querySelector(".products-lists-grid > ul");
  menus.map((menu) => {
    const { image, title, price, link } = menu;

    menuGrid.innerHTML += `
        <li>
          <figure>
            <img src="${image}" alt="${title}" title="${title}" />
            <figcaption>
              <p><small>${title}</small></p>
              <p><small class="rupiah">${price}</small></p>
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

  const rupiahs = document.querySelectorAll(".rupiah");
  function convert(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  }

  // console.log(rupiahs);
  for (const rupiah of rupiahs) {
    const value = rupiah.innerText
    rupiah.innerText = convert(value)
  }
};
