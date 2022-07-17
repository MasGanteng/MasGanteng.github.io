import { newss } from "./stores.js";

const newsLists = document.querySelector(".news-lists");

export const newest = () => {
  newss.map((news) => {
    var { image, date, title, content, link } = news;
    newsLists.innerHTML += `
        <li>
            <figure>
                <img src="https://source.unsplash.com/random/${image}" alt="${title}" title="${title}" />
                <figcaption>
                    <p class="date">${date}</p>
                    <p class="title line-clamp" style="--line:2">${title}</p>
                    <p class="line-clamp mb-2">${content.slice(0,300)}</p>
                </figcaption>
                <a href="${link}">See Detail News</a>
            </figure>
        </li>
    `;
  });
};
