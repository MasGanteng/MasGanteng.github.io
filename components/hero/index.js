import { heroDatas } from "/components/hero/datas.js";

import Swiper from "/assets/plugins/swiper/swiper-bundle.esm.browser.min.js";
const sheet = await import("/assets/plugins/swiper/swiper-bundle.min.css", {
  assert: { type: "css" },
});
document.adoptedStyleSheets = [sheet.default];
ShadowRoot.adoptedStyleSheets = [sheet.default];

const herosContainer = document.querySelector(".hero");

export const heros = () => {
  herosContainer.innerHTML += `
    <div class="swiper hero-swiper" style="height: inherit;">
        <ul class="swiper-wrapper">
        ${heroDatas
          .slice(0, 8)
          .map(
            (hero) => `
            <li class="swiper-slide">
                <figure>
                    <img src="https://source.unsplash.com/random/${hero.image}" class="swiper-lazy" alt="${hero.title}">
                    <div class="swiper-lazy-preloader"></div>
                    <figcaption>
                        <p class="title">${hero.title}</p>
                        <p class="mb-4" style="max-width:45%;">${hero.content}</p>
                        <a href="${hero.link}" class="btn btn-light btn-pill">See Our Menu</a>
                    </figcaption>
                </figure>
            </li>
            `
          )
          .join("")}
        </ul>
        <div class="swiper-pagination hero-pagination"></div>
        <div class="swiper-button-prev hero-prev"></div>
        <div class="swiper-button-next hero-next"></div>
    </div>
  `;

  const herosSwiper = new Swiper(".hero-swiper", {
    preloadImages: false,
    lazy: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".hero-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
  });
};
