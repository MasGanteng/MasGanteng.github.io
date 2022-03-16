import { storeFeatures } from "./stores.js";

export const storeFeat = () => {
  const store = document.querySelector(".store-features");
  const ul = store.appendChild(document.createElement('ul'))

  storeFeatures.map((storeFeature) => {
    const { image, title, subtitle, buttonText, buttonLink } = storeFeature;

    ul.innerHTML += `
        <li>
          <figure style="background-image:url(${image})">
            <div class="container">
              <figcaption>
                  <p class="title">${title}</p>
                  <span class="arrow">&#10230;</span>
                  <p class="subtitle">${subtitle}</p>
                  <a href="${buttonLink}" class="btn btn-light btn-pill">${buttonText}</a>
              </figcaption>
            </div>
          </figure>
        </li>
    `;
  });
};
