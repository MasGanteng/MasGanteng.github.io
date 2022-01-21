import { promos } from "./datas.js";

const promod = document.querySelector(".promo-lists");

var html = "";
export const promoMonth = () => {
  promos.map((promo) => {
    var { image, title, items } = promo;
    // promod.innerHTML += `
    //     <li>
    //         <figure>
    //             <img src="${image}" class="" alt="${title}" />
    //             <figcaption>
    //                 <p class="title">${title}</p>
    //                 <ul class="items"></ul>
    //             </figcaption>
    //         </figure>
    //     </li>
    // `;

    html +=
      "<li><figure><img src='" +
      image +
      "' class='' alt='" +
      title +
      "' /> <figcaption> <p class='title'>" +
      title +
      "</p>";
    items.map((item) => {
      html += "<li>" + item + "</li>";
    });
    html += "</figcaption></figure></li>";
    promod.innerHTML = html;

    // promod.innerHTML = html;
    // // console.log(items);
    // const itemLists = promod.querySelectorAll(".items");
    // console.log(itemLists);
    // items.map((item) => {
    //   itemLists.innerHTML += `
    //         <li>${item}</li>
    //     `;
    // });
  });
};
