/** @format */
import React, { Component } from "react";

// import "./bootstrap";
import $ from "jquery";

export class Custom extends Component {
  render() {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
    }
    $(window).on("resize", function (event) {
      if ($(window).width() <= 768) {
        $(".footer-links-wrapper").addClass("someClass");
      } else {
        $(".footer-links-wrapper").removeClass("someClass");
        $(".footer-links-wrapper ul").show();
      }
    });
    // Footer collapse functionality
    $(document).on("click", ".someClass h3", function () {
      $(this).next("ul").slideToggle();
      $(this).toggleClass("expanded");
    });
    return <></>;
  }
}

export default Custom;
