const cards = document.querySelector(".cards");
const items = [
  {
    link: "dear_butter",
    image: "jakub-dziubak-XtUd5SiX464-unsplash",
    caption: "Dear Butter",
  },
  {
    link: "music_player",
    image: "c-d-x-PDX_a_82obo-unsplash",
    caption: "Music Player",
  },
];
items.map((item) => {
  const { link, image, caption } = item;
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
