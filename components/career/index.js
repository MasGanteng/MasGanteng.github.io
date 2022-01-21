import { careers } from "./datas.js";

const careerLists = document.querySelector(".career-lists");

export const careerAble = () => {
  careers.map((career) => {
    var { position, location, district, city, link } = career;
    careerLists.innerHTML += `
        <li>
            <figure>
                <figcaption>
                    <p class="title">${position}</p>
                    <p class="content">
                        <svg class="icon">
                            <use xlink:href="/assets/images/svg/sprite.svg#Union"></use>
                        </svg>
                        <span>${location} - ${district}, ${city}</span>
                    </p>
                    <a href="${link}" class="btn btn-outline-light btn-pill">See Detail</a>
                </figcaption>
            </figure>
        </li>
    `;
  })}
