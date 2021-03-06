import { promos } from "./stores.js";

const promod = document.querySelector(".promo-lists");

export const promoMonth = () => {
  promos.map((promo) => {
    const { image, title, items } = promo;
    promod.innerHTML += `
        <li>
            <figure>
                <img src="${image}" class="" alt="${title}" title="${title}" />
                <figcaption>
                    <p class="title">${title}</p>
                    <ul class="items">
                      ${items.map(item => `
                        <li>${item}</li>
                      `).join("")}
                    </ul>
                </figcaption>
            </figure>
        </li>
    `;
  });
};
