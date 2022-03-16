import { 
    footerDesc, 
    footerSocMed, 
    footerNav, 
    footerPartnership, 
    copyright 
} from "./stores.js";

export const myFooter = () => {
  const footer = document.querySelector(".my-footer");
  footer.innerHTML += `
    <section class="contact">
        <div class="container">
            <div class="footer-content">
                <p class="title mb-2">Let's Become Our DB's Group</p>
                <p class="mb-4">Be part of DB Group Family, Growing together advancing technology enabled F&B industry in Indonesia</p>
                <a href="/pages/contact" class="btn btn-light btn-pill"><span>Contact Now</span></a>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="footer-content">
                <p class="title">Wanna see our latest promo and deals</p>
                <form action="">
                    <div class="form-floating">
                        <input type="email" name="" id="newsletter" required>
                        <label for="newsletter">Enter your email here</label>
                    </div>
                    <div>
                        <button 
                            class="btn btn-light btn-pill"
                            style="width:max-content;"
                        >
                            <span>Subscribe</span> 
                            <span class="view-desktop">&nbsp;Newsletter</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <section class="navigation">
        <div class="container">
            <div class="top">
                <div class="footer-content">
                    <div class="footer-about">
                        <img src="/assets/images/logo/logo.png" alt="logo">
                        <p>${footerDesc}</p>
                        <div class="view-desktop">
                            <ul class="footer-socmed">
                                ${footerSocMed.map(socmed => `
                                    <li>
                                        <a href="${socmed.path}">
                                            <svg class="icon">
                                                <use xlink:href="/assets/images/svg/socmed-sprite.svg#${socmed.src}"></use>
                                            </svg>
                                        </a>
                                    </li>
                                `).join("")}
                            </ul>
                        </div>
                    </div>
                    <div class="footer-nav">
                        <ul>
                            ${footerNav.map(nav => `
                                <li><a href="${nav.path}">${nav.text}</a></li>
                            `).join("")}
                        </ul>
                        <div>
                            <p><strong>Shop Partnership</strong></p>
                            <ul class="footer-partnership">
                                ${footerPartnership.map(partner => `
                                    <li>
                                        <svg class="icon">
                                            <use xlink:href="/assets/images/svg/socmed-sprite.svg#${partner.src}"></use>
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
                <p>Copyright © ${copyright} DB’s Group</p>
                <div class="view-mobile mt-2">
                    <ul class="footer-socmed">
                        ${footerSocMed.map(socmed => `
                            <li>
                                <a href="${socmed.path}">
                                    <svg class="icon">
                                        <use xlink:href="/assets/images/svg/socmed-sprite.svg#${socmed.src}"></use>
                                    </svg>
                                </a>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};
