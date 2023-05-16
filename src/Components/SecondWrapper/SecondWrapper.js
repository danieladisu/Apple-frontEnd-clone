/** @format */

import React from "react";
import FirstAndSecond from "../FirstAndSecond/FirstAndSecond";
import "./SecondWrapper.css";

class SecondWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold black p-2">iPhone 14</div>
          <h5 className="description p-0 bold black">
            wo great sizes.
            <br />
            Now with a splash of yellow.
          </h5>

          <div className="links-wrapper bold ">
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

export default SecondWrapper;
