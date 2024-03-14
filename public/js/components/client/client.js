import { HomeContent } from "../../data";
import "./client.css";

loadCss("/public/js/components/client/client.css");

export const clientHTML = `
<section class="clients align_center">
    <h3 class="font_primary">${HomeContent.client.title}</h3>
    <h2>${HomeContent.client.desc}</h2>
    <div class="container">
        <div class="horizontal-scrolling-items">
            <ul class="client_lists flex_box horizontal-scrolling-items__item">
                ${HomeContent.client.list
                  .map((item) => `<li><img alt="" src="${item}" /></li>`)
                  .join("")}
            </ul>
            <ul class="client_lists flex_box horizontal-scrolling-items__item">
                ${HomeContent.client.list
                  .map((item) => `<li><img alt="" src="${item}" /></li>`)
                  .join("")}
            </ul>
        </div>
    </div>
</section>
`;