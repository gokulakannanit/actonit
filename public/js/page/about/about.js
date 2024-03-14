import { banner } from "../../components/banner/banner";
import { clientHTML } from "../../components/client/client";
import { AboutContent } from "../../data";
import { util } from "../../util";

import "./about.css";

const aboutFinalHTML=`
<section class="about_final">
  <div class="container align_center">
    <h3 class="font_primary">REASON TO CHOOSE US</h3>
    <h2>We provide truly prominent IT solutions.</h2>
    <div class="flex_box wrap space_around block">
      ${AboutContent.how.map((item) => `<div class="message flex_box">
      <p class="font_primary" style="align-self: center;margin-right:20px;"><i class="fa fa-check"></i></p>
      <div class="align_left">
        <h4 class="font_primary">${item.title}</h4>
        <p>${item.block}</p>
      </div>
    </div>`).join("")}
    </div>
  </div>
</section>
`;

const aboutMiddleHTML = `
<section class="about_middle">
  <div class="container flex_box">
    <div class="flex_box">
      <img alt="" src="${AboutContent.who.image1}" />
      <img alt="" src="${AboutContent.who.image2}" />
    </div>
    <div class="content">
      <h3 class="font_primary">${AboutContent.who.title}</h3>
      <h1>${AboutContent.who.desc}</h1>
      <p>${AboutContent.who.block}</p>
      <div class="flex_box" style="margin-top: 20px">
        <div style="margin-right: 20px; width: 45%">
          <h2>${AboutContent.who.mission.title}</h2>
          <p>${AboutContent.who.mission.block}</p>
        </div>
        <div style="margin-left: 20px; width: 45%">
          <h2>${AboutContent.who.vision.title}</h2>
          <p>${AboutContent.who.vision.block}</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const aboutHTML = `
<section class="about_us align_center">
  <div class="container">
    <h3 class="font_primary">${AboutContent.title}</h3>
    <h2>${AboutContent.desc}</h2>
    <div class="about_content">
      <div>
        <div class="experience">
          <span class="year">15</span>
          <span>Years<br />Experience<br />In It</span>
        </div>
        <h3>More About Our Success Stories</h3>
      </div>
      <div class="block">
        ${AboutContent.block.map((content) => `<p>${content}</p>`).join("")}
      </div>
    </div>
  </div>
</section>
`;

const htmlString = `
    <section class="about_page">
        ${banner(AboutContent.banner)}
        ${aboutHTML}
        ${aboutMiddleHTML}
        ${aboutFinalHTML}
        ${clientHTML}
    </section>
`;

export default (main) => {
  const utils = util();
  return {
    load: () => utils.adddHtml(main, htmlString),
  };
};
