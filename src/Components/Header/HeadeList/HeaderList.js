/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
export class HeaderList extends Component {
  render() {
    return (
      <>
        {this.props.items.map((el, index) => (
          <li key={index} className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={el.url}>
              {el.name}
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default HeaderList;
