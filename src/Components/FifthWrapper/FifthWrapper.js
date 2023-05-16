/** @format */

import React from "react";
import banker from "../../Resources/images/home/banker.png";
import appleTvLogo from "../../Resources/images/icons/apple-tv-logo.png";
import watchLogo from "../../Resources/images/icons/watch-series5-logo.png";
import "./FifthWrapper.css";

function FifthWrapper() {
  return (
    <section className="fifth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="title-wraper bold white p-2">MacBook Pro</div>
              <h5 className="description white">Supercharged by M2 Pro and M2 Max</h5>

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
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
            <div className="title-wraper bold white ">HomePod</div>
              <h5 className="description white">Profound sound.</h5>
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

export default FifthWrapper;
