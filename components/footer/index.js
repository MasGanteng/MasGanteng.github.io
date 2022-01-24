import { footerNav } from "./datas.js";

export const myFooter = () => {
  const footer = document.querySelector(".my-footer");
  footer.innerHTML += `
    <section class="contact">
        <div class="container">
            <div class="footer-content">
                <p class="title">Let's Become Our DB's Group</p>
                <p class="content">Be part of DB Group Family, Growing together advancing technology enabled F&B
                    industry in Indonesia</p>
                <a href="" class="btn btn-light btn-pill"><span>Contact Now</span></a>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="footer-content">
                <p>Wanna see our latest promo and deals</p>
                <form action="">
                    <label for="newsletter"></label>
                    <input type="email" name="" id="newsletter" placeholder="">
                    <button class="btn btn-light btn-pill">Subscribe Newsletter</button>
                </form>
            </div>
        </div>
    </section>

    <section class="navigation">
        <div class="container">
            <div class="footer-content">
                <div>
                    <img src="/assets/images/logo/logo.png" alt="logo">
                    <p>DB’s Group is defined by our culture – one that embrace collaboration, agility, flexibility, constant improvement as well as tolerance to mistake.</p>
                    <ul class="footer-socmed">
                        <li>
                            <a href="">
                                <svg class="icon">
                                    <use xlink:href="/assets/images/svg/socmed-sprite.svg#facebook-brands"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg class="icon">
                                    <use xlink:href="/assets/images/svg/socmed-sprite.svg#linkedin-brands"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="footer-nav">
                    ${footerNav.map(nav=>`<li><a href="${nav.path}">${nav.text}</a></li>`).join("")}
                    </ul>
                    <div>
                        <p>Shop Partnership</p>
                        <ul class="footer-partnership">
                            <li>
                                <svg>
                                    <use xlink:href="/assets/images/svg/socmed-sprite.svg#go-food"></use>
                                </svg>
                            </li>
                            <li>
                                <svg>
                                    <use xlink:href="/assets/images/svg/socmed-sprite.svg#grab-food"></use>
                                </svg>
                            </li>
                            <li>
                                <svg>
                                    <use xlink:href="/assets/images/svg/socmed-sprite.svg#shopee-food"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="copyright">
        <span>2022</span>
    </section>
    `;
};
