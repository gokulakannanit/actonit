import { commonMessage, navMenu } from "./data.js";

export const logoHTML = `
<a href="/" class="logo">
    <img alt="" src="/public/images/logo.jpg" />
    <h1><span class="font_primary">ACT</span><span class="overlay">ON</span></h1>
</a>
`;

export const navHTML = (path = "") => `
    <ul class="flex_box">
        ${navMenu
          .map(
            (item) =>
              `<li><a href="${item.link}" class="address ${
                path === item.link && "selected"
              }">${item.title}</a></li>`
          )
          .join("")}
    </ul>
`;

export const noMessageHTML = (msg = commonMessage.NO_MESSAGE) =>
  `<p class="no_message"><span>${msg}</span></p>`;

export const loadCss = (url) => {
  let head = document.getElementsByTagName("HEAD")[0];
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  head.appendChild(link);
};

const backdrop = document.querySelector(".backdrop");

export const util = () => {
  const scrollFunctions = [];
  const addScrollFn = (scrollFn) => scrollFunctions.push(scrollFn);

  window.addEventListener("scroll", () => scrollFunctions.map((fn) => fn()));

  return {
    showBackdrop: (callback) => {
      util().addClass(backdrop, "show");
      backdrop.addEventListener("click", () => {
        callback();
        util().removeClass(backdrop, "show");
      });
    },
    removeBackdrop: () => util().removeClass(backdrop, "show"),
    adddHtml: (ele, htmlString) => (ele.innerHTML = htmlString),
    getEle: (selector) => document.querySelector(selector),
    getEleAll: (selector) => document.querySelectorAll(selector),
    removeClass: (ele, className) => ele?.classList.remove(className),
    addClass: (ele, className) => ele?.classList.add(className),
    addClassIf: (ele, className, condition) =>
      condition
        ? ele?.classList.add(className)
        : ele?.classList.remove(className),
    tooggleClass: (ele, className) =>
      ele?.classList.contains(className)
        ? ele?.classList.remove(className)
        : ele?.classList.add(className),
    isSeen: (el) =>
      (el?.getBoundingClientRect().bottom - 100) <= window.innerHeight,
    onScroll: addScrollFn,
  };
};
