import "./banner.css";

export const banner = ({ title, desc, image }) =>
  `
        <section class="banner_common">
            <img alt="" src="${image}" />
            <div class="message">
                <h2 class="font_primary">${title}</h2>
                <p>${desc}</p>
            </div>
        </section>
    `;
