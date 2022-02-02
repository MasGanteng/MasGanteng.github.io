import { newss } from "./datas.js";

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
                    <p class="title">${title}</p>
                    <p class="content">${content.slice(0,300)}</p>
                </figcaption>
                <a href="${link}">See Detail News</a>
            </figure>
        </li>
    `;
  });
};
