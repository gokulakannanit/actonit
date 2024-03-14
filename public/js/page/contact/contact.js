import { banner } from "../../components/banner/banner.js";
import { ContactContent } from "../../data.js";
import { loadCss, util } from "../../util.js";


loadCss("/public/js/page/contact/contact.css");

const messageFormHTML = `
<section class="contact_form container">
  <img src="/public/images/hero-img1.png" class="contact_bg"/>
  <h3 class="font_primary">GET IN TOUCH</h3>
  <h1>Send Us a Message</h1>
  <p class="block">Have some suggestions or enquiry for making business with us? Contact us:</p>
  <div class="form">
    <div class="form_row">
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Email" />
    </div>
    <div class="form_row">
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Subject" />
    </div>
    <div class="form_row">
      <textarea placeholder="Write Your Message..."></textarea>
    </div>
    <button class="send">SEND MESSAGE</button>
  </div>
</section>
`;

const contactHTML = `
<section class="container contact_us align_center">
  <h3 class="font_primary">${ContactContent.title}</h3>
  <h2>${ContactContent.desc1}</h2>
  <p class="block align_center">${ContactContent.desc2}</p>
  <div class="flex_box">
    ${ContactContent.links.map(item=>`<div class="contact_thumb">
    <p><i class="fa ${item.icon}"></i></p>
    <h2>${item.title}</h2>
    <p><a href="${item.linkURL}">${item.link}</a></p>
  </div>`).join("")}
  </div>
</section>
`;

const htmlString = `
    <section class="contact_page">
        ${banner(ContactContent.banner)}
        ${contactHTML}
        ${messageFormHTML}
    </section>
`;

export default (main) => {
  const utils = util();
  return {
    load: () => (utils.adddHtml(main, htmlString)),
  };
};
