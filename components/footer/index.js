import { footerDesc, footerSocMed, footerNav, footerPartnership, copyright } from "./datas.js";

export const myFooter = () => {
  const footer = document.querySelector(".my-footer");
  footer.innerHTML += `
    <section class="contact">
        <div class="container">
            <div class="footer-content">
                <p class="title">Let's Become Our DB's Group</p>
                <p class="content">Be part of DB Group Family, Growing together advancing technology enabled F&B industry in Indonesia</p>
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
            <div class="top">
                <div class="footer-content">
                    <div>
                        <img src="/assets/images/logo/logo.png" alt="logo">
                        <p>${footerDesc}</p>
                        <ul class="footer-socmed">
                            ${footerSocMed.map(socmed => `
                                <li>
                                    <a href="${socmed.path}">
                                        <svg class="icon">
                                            <use xlink:href="${socmed.src}"></use>
                                        </svg>
                                    </a>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                    <div>
                        <ul class="footer-nav">
                            ${footerNav.map(nav => `
                                <li><a href="${nav.path}">${nav.text}</a></li>
                            `).join("")}
                        </ul>
                        <div>
                            <p><strong>Shop Partnership</strong></p>
                            <ul class="footer-partnership">
                                ${footerPartnership.map(partner => `
                                    <li>
                                        <svg>
                                            <use xlink:href="${partner.src}"></use>
                                        </svg>
                                    </li>
                                `).join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="copyright">
                <span>${copyright}</span>
            </div>
        </div>
    </section>
    `;
};
