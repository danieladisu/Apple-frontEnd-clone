/** @format */

import React from "react";
import "./index.css";
import "./Resources/css/bootstrap.css";

import Alert from "./Components/Alert/Alert";
import FirstWrapper from "./Components/FirstWrapper/FirstWrapper";
import SecondWrapper from "./Components/SecondWrapper/SecondWrapper";
import ThirdWrapper from "./Components/ThirdWrapper/ThirdWrapper";
import FourthWrapper from "./Components/FourthWrapper/FourthWrapper";
import FifthWrapper from "./Components/FifthWrapper/FifthWrapper";
import SixthWrapper from "./Components/SixthWrapper/SixthWrapper";

import Ipad from "./Components/page/Ipad";
import Watch from "./Components/page/Watch";
import Tv from "./Components/page/Tv";
import Mac from "./Components/page/Mac";
import Music from "./Components/page/Music";
import Support from "./Components/page/Support";
import Search from "./Components/page/Search";
import Cart from "./Components/page/Cart";

import Common from "./Components/page/Common";
import Youtube from "./Components/Youtube/Youtube";
import Iphone from "./Components/page/Iphones";
import ProductPage from "./Components/page/LearnMorePage/ProductPage";
import NotFound from "./Components/page/Error/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./Components/SliderWrapper/ImageSlider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route
            exact
            path="/"
            element={
              <>
                <Alert />
                <FirstWrapper />
                <SecondWrapper />
                <ThirdWrapper />
                <FourthWrapper />
                <FifthWrapper />
                <SixthWrapper />
                <ImageSlider />
                {<Youtube />}
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:idp" element={<ProductPage />} />

          <Route path="/Mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
