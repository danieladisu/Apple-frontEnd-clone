/** @format */

import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../FooterWrapper/Footer";
export class Common extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Common;
