import { newss } from "./stores.js";
import Swiper from "/dear_butter/assets/plugins/swiper/swiper-bundle.esm.browser.min.js";
(async () => {
  const sheet = await import("/dear_butter/assets/plugins/swiper/swiper-bundle.min.css", {
    assert: { type: "css" },
  });
  document.adoptedStyleSheets = [sheet.default];
  ShadowRoot.adoptedStyleSheets = [sheet.default];
})();

const dbNews = document.querySelector(".db-news");

export const infos = () => {
  dbNews.innerHTML += `
    <div class="container">
      <div class="db-title">
          <h1 class="title">Dear Butter <span class="text-normal">News</span></h1>
      </div>
      <div class="swiper news-thumbnail" style="height: inherit;">
          <ul class="swiper-wrapper swiper-news">
            ${newss
              .slice(0, 8)
              .map(
                (news) => `
              <li class="swiper-slide">
                  <figure>
                      <img src="https://source.unsplash.com/random/${news.image}" alt="${news.title}" title="${news.title}">
                      <figcaption>
                          <p class="title line-clamp mb-1"><small>${news.title}</small></p>
                          <hr />
                          <p class="line-clamp mb-2"><small>${news.content}</small></p>
                          <a href="${news.link}">See Details</a>
                      </figcaption>
                  </figure>
              </li>
              `
              )
              .join("")}
          </ul>
      </div>
      <div class="swiper-button-prev news-prev"></div>
      <div class="swiper-button-next news-next"></div>
    </div>
  `;

  const newsSwiper = new Swiper(".news-thumbnail", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
};
