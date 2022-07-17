// async function film(url) {
//   let response = await fetch(url);
//   let datas = await response.json();
//   datas.map();
//   //   let err = await console.log(err);
// }
// film("https://gist.github.com/alanponce/d8a5e47b4328b5560fb610c5731de2bd");

// fetch("https://gist.github.com/alanponce/d8a5e47b4328b5560fb610c5731de2bd")
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => console.log("Error : " + err));

const movies = document.querySelector(".movies");
movies.innerHTML += `
    <li class="card">
        <figure>
            <img src="./assets/image/1.webp" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
    <li class="card">
        <figure>
            <img src="" class="poster" alt="" />
            <figcaption class="caption">jkl</figcaption>
        </figure>
    </li>
`;
