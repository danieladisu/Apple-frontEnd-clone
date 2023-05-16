/** @format */

import React from "react";
import FirstAndSecond from "../FirstAndSecond/FirstAndSecond";
import "./FirstWrapper.css";

class FirstWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold white p-2">iPhone 14 Pro</div>
          <h5 className="description">Pro.Beyond.</h5>

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
}

export default FirstWrapper;
