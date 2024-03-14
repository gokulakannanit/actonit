import { PortfolioContent } from "../../data";
import { noMessageHTML, util } from "../../util";
import { banner } from "../../components/banner/banner";
import "./portfolio.css";

const portfolioHTML = `
<section class="portfolio">
    <div class="container align_center">
        <h3 class="font_primary">${PortfolioContent.title}</h3>
        <h2>${PortfolioContent.desc}</h2>
        <section class="list_tags">
            <ul class="menu flex_box" style="width: 500px; margin: 50px auto">
                ${PortfolioContent.types
                  .map((item) => `<li><a>${item}</a></li>`)
                  .join("")}
            </ul>
        </section>
        <section class="portfolio_list flex_box wrap"></section>
    </div>
</section>
`;

const portfolioListHTML = (list) =>
  list
    .map(
      (item) => `<div class="portfolio_thumb">
        <img src="${item.image}" />
        <div>
            <h3>${item.title}</h3>
            <h4 class="font_primary">${item.name}</h4>
            <p>${item.desc}</p>
        </div>
    </div>`
    )
    .join("");

const htmlString = `
    <section class="portfolio_page">
        ${banner(PortfolioContent.banner)}
        ${portfolioHTML}
    </section>
`;

let selectedPortfolio = PortfolioContent.types[0];

export default (main) => {
  const utils = util();

  const selectTag = (e) => {
    e.preventDefault();
    selectedPortfolio = e.target.innerHTML;
    refreshTagSelection();
  };

  const reloadPorfolioList = () => {
    const ele = utils.getEle(".portfolio_page .portfolio_list");
    const filteredList = PortfolioContent.list.filter(
      (item) =>
        item.type.toLowerCase() === selectedPortfolio.toLowerCase() ||
        selectedPortfolio === "All"
    );
    ele.innerHTML =
      (filteredList.length && portfolioListHTML(filteredList)) ||
      noMessageHTML();
  };

  const refreshTagSelection = (onLoad = false) => {
    const menuTags = utils.getEleAll(".portfolio_page .menu li a");

    menuTags.forEach((ele) => {
      onLoad && ele.addEventListener("click", selectTag);
      utils.addClassIf(ele, "selected", ele.innerHTML === selectedPortfolio);
    });

    reloadPorfolioList();
  };

  return {
    load: () => {
      utils.adddHtml(main, htmlString);
      refreshTagSelection(true);
    },
  };
};