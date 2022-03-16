import { menus, menuLists } from "./stores.js";

// export const menuList = () => {
//   const menuGrid = document.querySelector(".products-lists-grid > ul");
//   menus.map((menu) => {
//     const { image, title, price, link } = menu;

//     menuGrid.innerHTML += `
//         <li>
//           <figure>
//             <img src="${image}" alt="${title}" title="${title}" />
//             <figcaption>
//               <p><small>${title}</small></p>
//               <p><small class="rupiah">${price}</small></p>
//               <a
//                 href="${link}"
//                 class="btn btn-outline-light btn-pill"
//                 >See Details</a
//               >
//             </figcaption>
//           </figure>
//         </li>
//     `;
//   });

export const menuList = () => {
  const menuGrid = document.querySelector(".products-lists-grid > ul");
  menuLists.map((menu) => {
    // const { image, title, price, link } = menu;
    // const {
    //   groupMenus,
    //   menuItems: { image, title, price, link },
    // } = menu;

    menuGrid.innerHTML += `
        <li id="${menu.groupMenus}" class="products-groups">
          <h2 class="mb-3">${menu.groupMenus}</h2>
          <ul class="display-grid">
            ${menu.menuItems
              .map(
                (m) => `
                         <li class="products-card">
                           <figure>
                             <img src="${m.image}" alt="${m.title}" title="${m.title}" loading="lazy" />
                             <figcaption>
                               <p><small>${m.title}</small></p>
                             <p><small class="rupiah">${m.price}</small></p>
                               <a
                                 href="${m.link}"
                                 class="btn btn-outline-light btn-pill"
                                 >See Details</a
                               >
                             </figcaption>
                           </figure>
                         </li>`
              )
              .join("")}
          </ul>
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

  for (const rupiah of rupiahs) {
    const value = rupiah.innerText;
    rupiah.innerText = convert(value);
  }
};
