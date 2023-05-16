/** @format */

import React from "react";
import "./FourthWrapper.css";
import wwdc23 from "../images/large/promo_logo_wwdc23__gcsmmrgbhlme_large.png";

function FourthWrapper() {
  return (
    <section className="fourth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container ">
              <div className="wwContainer">
                <img src={wwdc23} />
                <h6 className="description-wraper white pt-2">
                  Apple Worldwide Developers Conference. <br /> Join us online
                  June 5-9.
                </h6>

                <div className="links-wrapper mb-0">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
          <div className="right-side-container">
          <div className="title-wraper bold black ">iPad</div>
            <h5 className="description black">Profound sound.</h5>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthWrapper;
