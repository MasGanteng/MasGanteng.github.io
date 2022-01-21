import { storeFeatures } from "./datas.js";

export const storeFeat = () => {
  const store = document.querySelector(".store-features > ul");
  storeFeatures.map((storeFeature) => {
    const { image, title, subtitle, buttonText, buttonLink } = storeFeature;

    store.innerHTML += `
        <li>
            <figure>
                <img src="${image}" alt="${title}" />
                <figcaption>
                    <p class="title">${title}</p>
                    <span class="arrow">&#10230;</span>
                    <p class="subtitle">${subtitle}</p>
                    <a href="${buttonLink}" class="btn btn-light btn-pill">${buttonText}</a>
                </figcaption>
            </figure>
        </li>
    `;
  });
};
