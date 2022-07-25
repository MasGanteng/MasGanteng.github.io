const navLists = [
  { icon: "home", title: "Home", link: "../../" },
  { icon: "adjustments", title: "Master", link: "../../" },
];

const list = document.querySelector(".nav-lists");

navLists.map((navList) => {
  const { icon, title, link } = navList;
  list.innerHTML += `
      <li>
        <a href="${link}" data-title="${title}">
            <svg class="icons">
                <use xlink:href="./assets/svg/sprite.svg#${icon}"></use>
            </svg>
        </a>
      </li>
    `;
});
