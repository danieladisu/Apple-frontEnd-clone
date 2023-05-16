/** @format */

import React from "react";
import "./ThirdWrapper.css";
import watchLogo from "../images/large/hero_logo_apple_watch_series_8__ezarmmoobhg2_largetall.png";
function ThirdWrapper() {
  return (
    <section className="third-hightlight-wrapper">
      <div className="container">
        <div className="logo-wrapper">
          <img src={watchLogo} />
        </div>

        <div className="description-wrapper">
          A healthy leap ahead.
        </div>

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
    </section>
  );
}

export default ThirdWrapper;
