import { newss } from "./datas.js";
import Swiper from "/assets/plugins/swiper/swiper-bundle.esm.browser.min.js"
const sheet = await import("/assets/plugins/swiper/swiper-bundle.min.css", {
  assert: { type: "css" },
});
document.adoptedStyleSheets = [ sheet.default ]
ShadowRoot.adoptedStyleSheets = [ sheet.default ]

const dbNews = document.querySelector(".db-news");

export const infos = () => {
  dbNews.innerHTML += `
    <div class="container">
      <div class="db-title">
          <h1 class="title">Dear Butter <span class="text-normal">News</span></h1>
      </div>
      <div class="swiper news-thumbnail" style="height: inherit;">
          <ul class="swiper-wrapper swiper-news">
            ${newss.slice(0, 8).map((news) => `
              <li class="swiper-slide">
                  <figure>
                      <img src="https://source.unsplash.com/random/${news.image}" class="mb-1" alt="${news.title}">
                      <figcaption>
                          <p class="title line-clamp mb-1" style="--line:2">${news.title}</p>
                          <p class="content line-clamp mb-2">${news.content}</p>
                          <a href="${news.link}">See Details</a>
                      </figcaption>
                  </figure>
              </li>
              `).join("")
            }
          </ul>
      </div>
      <div class="swiper-button-prev news-prev"></div>
      <div class="swiper-button-next news-next"></div>
    </div>
  `;

  const newsSwiper = new Swiper(".news-thumbnail", {
      loop:true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
          nextEl: ".news-next",
          prevEl: ".news-prev",
      },
  });
};