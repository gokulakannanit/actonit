import { ServiceContent } from "../../data.js";
import { loadCss, util } from "../../util.js";
import { banner } from "../../components/banner/banner.js";


loadCss("/public/js/page/service/service.css");

const serviceListHTML = `
<section class="container align_center">
    <h3 class="font_primary">${ServiceContent.title}</h3>
    <h2>${ServiceContent.desc}</h2>
    <div class="flex_box service_item_list">
        ${ServiceContent.list.map(
          (item) => `
            <div class="service_item">
                <img src="${item.image}" />
                <div class="service_item_content">
                    <h2 class="font_primary">${item.title}</h2>
                    ${item.desc.map((des) => `<p>${des}</p>`).join("")}
                </div>
            </div>`
        ).join("")}
    </div>
</section>
`;

const htmlString = `
    <section class="service_page">
        ${banner(ServiceContent.banner)}
        ${serviceListHTML}
    </section>
`;

export default (main) => {
  const utils = util();
  return {
    load: () => utils.adddHtml(main, htmlString),
  };
};
