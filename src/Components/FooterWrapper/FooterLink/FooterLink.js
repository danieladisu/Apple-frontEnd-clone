/** @format */

import React, { Component } from "react";

export class FooterLink extends Component {
  render() {
    return (
      <>
        {this.props.listItems.map((el, index) => (
          <li key={index}>
            <a href={el.url}>{el.name}</a>
          </li>
        ))}
      </>
    );
  }
}

export default FooterLink;
