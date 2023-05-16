/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import NotFound from "../Error/NotFound";
import iphoneData from "../iphone.json";
function ProductPage() {
  const { idp } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // const response = await axios.get("http://localhost:200/iphones");
        // const response = await axios.get("../iphone.json");

        const productList = iphoneData.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === idp
        );
        setProducts(singleProduct);
        console.log(singleProduct);
        setIsLoading(false);
      } catch (error) {
        setError("Unable to fetch products");
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [idp]);

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
  console.log(products.length);
  if (products.length > 0) {
    return (
      <>
        <section className="internal-page-wrapper m-5">
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-12 mt-5">
                <h1 className="font-weight-bold">
                  The page you’re looking is from ProductPage.
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="internal-page-wrapper">
          <div className="container">
            {products.map((product) => {
              // console.log(product);
              let {
                product_name: title,
                product_url: url,
                imgPath: img,
                starting_price: StartPrice,
                price_range: PriceRange,
                briefDescription: Brief,
                productDescription: Description,
              } = product;
              let productDiv = (
                <div key={url}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5">
                      <div className="title-wraper font-weight-bold p1">
                        {title}
                      </div>
                      <div className="brief-description p-2">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price p-1">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price p-1">{PriceRange}</div>
                      <div className="product-details p-2">{Description}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6 p-5 pt-2 `}>
                      <div className="prodict-image">
                        <img src={img} alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </>
    );
  } else {
    return <NotFound />;
  }
}

export default ProductPage;

// =================================================
// import { useEffect, useState } from "react";
// import NotFound from "./NotFound";

// function Productpage(props) {
//   const [product, setProduct] = useState(null);
//   const productID = props.match.params.idp;

//   useEffect(() => {
//     fetch(`http://localhost:200/iphones/${productID}`)
//       .then((res) => res.json())
//       .then((productData) => {
//         setProduct(productData.product);
//       })
//       .catch(() => console.log("Error: unable to fetch!!"));
//   }, [productID]);

//   if (!product) {
//     return <NotFound />;
//   }

//   const {
//     product_id: id,
//     product_url: title,
//     imgPath: img,
//     briefDescription: Brief,
//     description: Description,
//     starting_price: StartPrice,
//     price_range: PriceRange,
//   } = product;

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5">
//               <div className="title-wraper font-weight-bold">{title}</div>
//               <div className="brief-description">{Brief}</div>
//             </div>
//           </div>

//           <div className="row justify-content-center text-center product-holder h-100">
//             <div className="col-sm-12 col-md-6 my-auto">
//               <div className="starting-price">
//                 {`Starting at ${StartPrice}`}
//               </div>
//               <div className="monthly-price">{PriceRange}</div>
//               <div className="product-details">{Description}</div>
//             </div>

//             <div className="col-sm-12 col-md-6">
//               <div className="prodict-image">
//                 <img src={img} alt="product" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Productpage;
