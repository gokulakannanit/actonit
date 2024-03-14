import { banner } from "../../components/banner/banner.js";
import { CareerContent } from "../../data.js";
import { util } from "../../util.js";
import "./career.css";

const jobListHTML = (jobs) => `
${jobs
  .map(
    (job) => `<div class="list_item">
    <div>
        <h3>${job.title}</h3>
        <p>${job.type}</p>
    </div>
    <p>${job.desc}</p>
    <div>
        <button>Apply Now</button>
    </div>
</div>
`
  )
  .join("")}`;

const careerHTML = `
<section class="career">
    <div class="container align_center">
        <h3 class="font_primary">${CareerContent.title}</h3>
        <h2>${CareerContent.desc}</h2>
    </div>
    <div class="career_list">
       ${jobListHTML(CareerContent.jobs)}
    </div>
    <section class="career_ext">
        <div class="container flex_box inside">
            <div class="message">
                <h2>${CareerContent.ext.title}</h2>
                <p>${CareerContent.ext.desc}</p>
            </div>
            <div class="reach_us align_center">
                <p class="font_primary"><i class="fa fa-phone"></i></p>
                <p class="message">${CareerContent.ext.reachUsMessage}</p>
                <h2 class="font_primary"><a href="tel:">1900 68668</a></h2>
                <button>Contact Us</button>
            </div>
            <img src="/public/images/hero-img1.png" />
        </div>
    </section>
</section>
`;

const htmlString = `
    <section class="career_page">
        ${banner(CareerContent.banner)}
        ${careerHTML}
    </section>
`;

export default (main) => {
  const utils = util();
  return {
    load: () => utils.adddHtml(main, htmlString),
  };
};
