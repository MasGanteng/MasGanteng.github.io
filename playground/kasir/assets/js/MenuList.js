const menuLists = [
  { img: "cake", title: "cake", price: 16.8 },
  { img: "coffee", title: "coffee", price: 16.8 },
  { img: "potato", title: "potato", price: 16.8 },
  { img: "waffle", title: "waffle", price: 16.8 },
  { img: "bread", title: "bread", price: 16.8 },
];

const lists = document.querySelector(".menu-list");

menuLists.map((menuList) => {
  const { img, title, price } = menuList;
  lists.innerHTML += `
    <li>
        <a href="" class="menu-card">
            <figure>
                <img src="https://source.unsplash.com/200x200/?${img}" alt="judul" title="judul">
                <figcaption>
                    <p>${title}</p>
                    <p>${price}</p>
                </figcaption>
            </figure>
        </a>
        <a href="" class="menu-add-cart">
            <svg class="icons">
                <use xlink:href="./assets/svg/sprite.svg#shopping-bag"></use>
            </svg>
        </a>
    </li>
  `;
});
