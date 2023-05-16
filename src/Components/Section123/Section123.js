import React from "react";
import "./FourthWrapper.css";

function FourthWrapper(props) {
  const {
    title,
    description,
    price,
    links,
    whiteBackground
  } = props;

  const containerClass = whiteBackground ? "container-fluid white" : "container-fluid";

  return (
    <section className="fourth-heghlight-wrapper">
      <div className={containerClass}>
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="title-wraper">{title}</div>
              <div className="description-wraper">{description}</div>
              <div className="price-wrapper">{price}</div>

              <div className="links-wrapper">
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className={`title-wraper ${whiteBackground ? "white" : ""}`}>
                Get the latest CDC response to COVID-19.
              </div>

              <div className={`links-wrapper ${whiteBackground ? "white" : ""}`}>
                <ul>
                  <li>
                    <a href="">Watch the PSA</a>
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

export default FourthWrapper;
