const cards = document.querySelector(".cards");
// import { navs } from "./nav.json";

const navs = async(url) => {
    let response = await fetch(url)
    let datas = await response.json()
    datas.map((nav) => {
      const { link, image, caption } = nav;
      cards.innerHTML += `
        <li class="card">
            <a href="${link}">
                <figure>
                    <img src="/src/image/${image}.webp" alt="${caption}">
                    <figcaption>${caption}</figcaption>
                </figure>
            </a>
        </li>
      `;
    });
}
navs('/src/js/nav.json')
// fetch("./nav.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(response);
