import { util, logoHTML, navHTML } from "../../util";

import sheet from "./footer.css" assert { type: "css" };
document.adoptedStyleSheets = [sheet];

const htmlString = `
    <div class="footer container">
        <div class="flex_box">
            <div class="footer_info">
                <div class="footer_logo">${logoHTML}</div>
                <div>
                    <h3 class="font_primary">About Us</h3>
                    <p>
                        We offer you all types of modern solutions that are related to it. Software and Graphic design in qucikest easy way and maintaining quality.
                    </p>
                    <p class="follow">
                        Follow US :
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                    </p>
                </div>
            </div>
            <div class="footer_info">
                <h3 class="font_primary">Navigation</h3>
                <div class="nav"></div>
            </div>
            <div class="footer_info">
                <h3 class="font_primary">Contact Info</h3>
                <ul>
                    <li>
                        <a href="tel:" class="address"> <i class="fa fa-phone"></i><span>(123) 45678910</span> </a>
                    </li>
                    <li>
                        <a href="mailto:support@acton.com" class="address"> <i class="fa fa-envelope"></i>support@acton.com </a>
                    </li>
                    <li>
                        <a href="" class="address flex_box">
                            <i class="fa fa-map-marker"></i>
                            <span>
                                267 Park Avenue <br />
                                New York, NY 90210
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p class="small font_primary">Copyright © ACTON all rights reserved.</p>
    </div>
    <div class="scroll_button hide" id="scroll_button" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
        <i class="fa fa-angle-up"></i>
    </div>
`;

export const Footer = (ele) => {
  const utils = util();
  utils.adddHtml(ele, htmlString);
  utils.adddHtml(utils.getEle(".footer_info .nav"), `${navHTML()}`);
  window.addEventListener("scroll", ()=>{
    const scrollButton = utils.getEle("#scroll_button");
    utils.addClass(scrollButton, "hide");
    (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) && utils.removeClass(scrollButton, "hide");
  });
};
