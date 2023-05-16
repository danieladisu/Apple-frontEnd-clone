/** @format */

import React from "react";
import arcade from "../images/large/logo_light__cfvl40z2nzau_large.png";
import appleCard from "../images/large/logo__dcojfwkzna2q_large.png";

import "./SixthWrapper.css";

function SixthWrapper() {
  return (
    <section className="sixth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper pt-0">
                <div className="logo-wrapper mb-1">
                  <img src={arcade} />
                </div>
              </div>
              <h5 className=" white p-0 m-0">
                Play Doctor Who: An Unlikely Heist.
              </h5>
              <div className="links-wrapper white">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">
                      Try it free<sup>2</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={appleCard} />
                </div>
              </div>
              <div className="description-wraper">
                Get up to 3% Daily Cash back with every purchase.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Apply now</a>
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

export default SixthWrapper;
