import "../css/style.css";

import { util } from "./util.js";
import { Header } from "./components/header/header.js";
import { Footer } from "./components/footer/footer.js";

export const main = () => {
  const utils = util();
  const { pathname } = window.location;

  const mainEle = utils.getEle("main");
  const headerEle = utils.getEle("header");
  const footerEle = utils.getEle("footer");

  let pageObj = [];

  const header = Header(headerEle);
  const footer = Footer(footerEle);

  const activateState = () => {
    utils.getEleAll("a").forEach((ele) =>
      ele.addEventListener("click", (e) => {
        const path = e.target.getAttribute("href");
        if (path.substring(0, 1) === "/") {
          e.preventDefault();
          window.history.pushState({}, null, path);
          loadPage(path);
        }
      })
    );
  };

  const loadPage = (path) => {
    header.pathChange(path);
    const page = path.split("/")[1] || "home";
    
    pageObj[page]?.load() ||
      import("./page/" + page + "/" + page).then((module) => {
        console.log(page);
        pageObj[page] = module.default(mainEle);
        pageObj[page].load();
      });

    activateState();
  };

  loadPage(pathname);
};
