/** @format */

import React from "react";
import flag from "../../Resources/images/icons/16.png";

import FooterLink from "./FooterLink/FooterLink";
import $ from "jquery";
// import Custom from "../../Resources/js/Custom";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myList1 = [
      { name: "Mac  " },
      { name: " iPad " },
      { name: " iPhone " },
      { name: " Watch " },
      { name: " TV " },
      { name: " Music " },
      { name: " AirPods " },
      { name: "HomePod  " },
      { name: " iPod touch " },
      { name: " Accessories " },
      { name: " Gift Cards " },
    ];
    const myList2 = [
      { name: "Apple Music" },
      { name: "Apple News+" },
      { name: "Apple TV+" },
      { name: "toggleMenuApple Arcade" },
      { name: "Apple Card" },
      { name: "iCloud" },
    ];
    const myList3 = [
      { name: " Manage Your Apple ID " },
      { name: " Apple Store Account " },
      { name: " iCloud.com " },
      { name: " Accessories " },
      { name: " Gift Cards " },
    ];
    const myList4 = [
      { name: " Find a Store" },
      { name: " Genius Bar" },
      { name: " Today at Apple" },
      { name: " Apple Camp" },
      { name: " Field Trip" },
      { name: " Apple Store App" },
      { name: " Refurbished and Clearance" },
      { name: " Financing" },
      { name: " Apple Trade In" },
      { name: " Order Status" },
      { name: " Shopping Help" },
    ];

    const myList5 = [
      { name: "      Apple and Business " },
      { name: "     Shop for Business " },
    ];
    const myList6 = [
      { name: "      Apple and Education " },
      { name: " Shop for College " },
    ];
    const myList7 = [
      { name: "  Manage Your Apple ID " },
      { name: " Apple Store Account " },
      { name: " iCloud.com " },
    ];

    const myList8 = [
      { name: "Apple and Education" },
      { name: "Shop for College" },
    ];

    const myList9 = [
      { name: "Find a Store" },
      { name: "Genius Bar" },
      { name: "Today at Apple" },
      { name: "Apple Camp" },
      { name: "Field Trip" },
      { name: "Apple Store App" },
    ];

    const myList10 = myList9;

    // Footer collapse functionality

    $(document).on("click", ".footer-links-wrapper h3", function () {
      const $this = $(this);

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      } else {
        $(this).next("ul");
        $(this).toggleClass("");
      }
    });

    return (
      <>
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              1. Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In-store trade-in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores, and
              may vary between in-store and online trade-in. Some stores may
              have additional requirements. Apple or its trade-in partners
              reserve the right to refuse or limit quantity of any trade-in
              transaction for any reason. More details are available from
              Apple’s trade-in partner for trade-in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </div>

            <div className="footer-links-wrapper row">
              <div className="links-wrapper-1 col-sm-12 col-md">
                <h3>Shop and Learn</h3>
                <ul>
                  <FooterLink
                    listItems={[
                      { name: "Mac ", url: "/" },
                      { name: " iPad " },
                      { name: " iPhone " },
                      { name: " Watch " },
                      { name: " TV " },
                      { name: " Music " },
                      { name: " AirPods " },
                      { name: "HomePod  " },
                      { name: " iPod touch " },
                      { name: " Accessories " },
                      { name: " Gift Cards " },
                    ]}
                  />
                </ul>
              </div>
              <div className="links-wrapper-2 col-sm-12 col-md">
                <h3>Services</h3>
                <ul>
                  <FooterLink listItems={myList2} />
                </ul>
                <h3>Account</h3>
                <ul>
                  <FooterLink listItems={myList3} />
                </ul>
              </div>
              <div className="links-wrapper-3 col-sm-12 col-md">
                <h3>Apple Store</h3>
                <ul>
                  <FooterLink listItems={myList4} />
                </ul>
              </div>
              <div className="links-wrapper-4 col-sm-12 col-md">
                <h3>For Business</h3>
                <ul>
                  <FooterLink listItems={myList5} />
                </ul>

                <h3>For Education</h3>
                <ul>
                  <FooterLink listItems={myList6} />
                </ul>

                <h3>For Healthcare</h3>
                <ul>
                  <FooterLink listItems={myList7} />
                </ul>

                <h3>For Government</h3>
                <ul>
                  <FooterLink listItems={myList8} />
                </ul>
              </div>
              <div className="links-wrapper-5 col-sm-12 col-md">
                <h3>Apple Values</h3>
                <ul>
                  <FooterLink listItems={myList9} />
                </ul>
                <h3>About Apple</h3>
                <ul>
                  <FooterLink listItems={myList10} />
                </ul>
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="#">Find an Apple Store</a> or
              <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Sales and Refunds</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
              <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={flag} alt="" />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
