/** @format */

import React, { Component } from "react";

export class FirstAndSecond extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="title-wraper bold black p-0 m-0 ">
            {this.props.title}
          </div>
          <div className="title-wraper bold white  p-0 m-0 ">
            {this.props.title1}
          </div>

          <div className="description-wrapper black p-0">
            {this.props.description}
            <br />
          </div>
          <div className="description-wrapper bolder black p-0 m-0 w-100">
            {this.props.description1}
          </div>
          <div className="price-wrapper grey">{this.props.price}</div>

          <div className="links-wrapper p-0 m-0">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{this.props.buyAndOrder}</a>
              </li>
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              {this.props.caption1}
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              {this.props.caption2}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FirstAndSecond;
