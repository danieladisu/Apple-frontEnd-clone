/** @format */

// =======================================
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import NotFound from "./Error/NotFound";
import iphoneData from "./iphone.json";

function Iphone(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      // const response = await axios.get("http://localhost:200/iphones");
      setProducts(iphoneData.products);

      // setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      setError("Unable to fetch products");
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5">
            <div className="title-wraper font-weight-bold">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  let order = 2;
  return (
    <>
      <section className="internal-page-wrapper mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">Iphones </div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.length > 0 ? (
            products.map((product) => {
              // console.log(product);
              let {
                product_id: id,
                product_name: title,
                product_url: url,
                imgPath: img,
                starting_price: StartPrice,
                price_range: PriceRange,
                briefDescription: Brief,
              } = product;
              let productPage = `/iphone/${url}`;
              let order1 = 1;
              let order2 = 2;
              if (order !== 1) {
                order1 = 2;
                order2 = 1;
                order--;
              } else {
                order++;
              }

              let productDiv = (
                <div
                  key={id}
                  className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="product-title">{title}</div>
                    <div className="product-brief">{Brief}</div>

                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="prodict-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })
          ) : (
            <NotFound />
          )}
        </div>
      </section>
    </>
  );
}

export default Iphone;
