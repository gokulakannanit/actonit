import { clientHTML } from "../../components/client/client";
import { BannerService, HomeContent, bannerImages } from "../../data";
import { loadCss, util } from "../../util";

loadCss("/public/js/page/home/home.css");

const numberHTML = `
<section class="numbers flex_box animation">
   ${BannerService.map(
     (item) =>
       `<div class="list flex_box"><img alt="" src="${item.image}" /><div><h2>${item.title}</h2><p>${item.desc}</p></div></div>`
   ).join("")}
</section>
`;

const bannerHTML = `
<section class="banner animation">
    <div class="banner_images">
        ${bannerImages
          .map((item) => `<img alt="" src="/public/images/banner/${item}" />`)
          .join("")}
    </div>
    <div class="banner_message">
        <p class="font_primary">Welcome to ACTON</p>
        <h2>We transform ideas into technology</h2>
        <p class="message">
            We provide the most responsive and functional IT design for companies
            and businesses worldwide.
        </p>
        <a href="#about" class="simple">Learn More</a>
    </div>
</section>
`;

const aboutHTML = `
<section class="about flex_box container" id="about">
      <div class="about_right flex_box">
        <img alt="" src="/public/images/ab-1.png" class="anim" />
        <img alt="" src="/public/images/ab-2.png" class="anim" />
        <div class="block anim">
          <h2 class="align_center"${HomeContent.about.block1}</h2>
        </div>
        <div class="block anim">
          <h3>${HomeContent.about.block2}</h3>
        </div>
      </div>
      <div class="content">
        <h1>${HomeContent.about.title}</h1>
        ${HomeContent.about.desc.map((item) => `<p>${item}</p>`).join("")}
      </div>
    </section>
`;

const serviceHTML = `
<section class="service service_section">
    <section class="service_list container align_center">
        <h3 class="font_primary anim">${HomeContent.service.title}</h3>
        <h2 class="anim">${HomeContent.service.description}</h2>
        <div class="flex_box" style="clear: both; margin: 50px 0">
            ${HomeContent.service.serviceList
              .map(
                (item) =>
                  `<div class="service_list_item">
                        <img alt="" src="${item.image}" />
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>`
              )
              .join("")}
        </div>
    </section>
</section>
`;

const testimonialHTML = `
<section class="testimonial container">
    <h3 class="align_center font_primary">${HomeContent.testimonial.title}</h3>
    <h2 class="align_center">${HomeContent.testimonial.desc}</h2>
    <div class="list flex_box">
    ${HomeContent.testimonial.messages
      .map(
        (item) => `<div class="list_item">
          <div class="flex_box avatar">
              <img alt="" src="${item.avatar}" />
              <div>
                  <h3>${item.name}</h3>
                  <p>${item.status}</p>
                  <p class="star">
                      ${[1, 2, 3, 4, 5]
                        .map(
                          (index) =>
                            `<i class="fa fa-star ${
                              index <= item.rating ? "checked" : ""
                            }"></i>`
                        )
                        .join("")}
                  </p>
              </div>
          </div>
          <p class="description">${item.message}</p>
          </div>`
      )
      .join("")}
    </div>
</section>
`;

const htmlString = `
 <section class="home">
    ${bannerHTML}
    ${numberHTML}
    ${aboutHTML}
    ${serviceHTML}
    ${testimonialHTML}
    ${clientHTML}
 </section>
`;

export default (main) => {
  const utils = util();
  let isFirstTime = true;

  const onScroll = () => {
    const element = [".about", ".service_section"];

    element.map((className) => {
      const ele = utils.getEle(className);
      utils.isSeen(ele) || isFirstTime
        ? utils.addClass(ele, "animation")
        : utils.removeClass(ele, "animation");
    });

    isFirstTime = false;
  };

  const startBannerAnimation = () => {
    let count = 0;
    const bannerImages = utils.getEleAll(".banner_images img");
    const bannerCount = bannerImages.length - 1;

    const changeImage = () => {
      count === bannerCount + 1 && (count = 0);
      const prevCount = count === 0 ? bannerCount : count - 1;
      utils.removeClass(bannerImages[prevCount], "scale_anim");
      utils.addClass(bannerImages[count], "scale_anim");
      count++;
    };

    setInterval(changeImage, 6000);
    changeImage();

    utils.onScroll(onScroll);
  };

  return {
    load: () => {
      utils.adddHtml(main, htmlString);
      startBannerAnimation();
    },
  };
};
