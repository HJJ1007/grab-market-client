import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  axios
    .get("")
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.error("에러 발생 : ", error);
    });

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="asd" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list"></div>
        <div className="product-card">
          <Link className="product-link" to={`/products/1`}>
            <div>
              <img
                className="product-img"
                src="images/products/keyboard1.jpg"
                alt=""
              />
            </div>
            <div className="product-contents">
              <span className="product-name">키보드</span>
              <span className="product-price">50000원</span>
              <div className="product-seller">
                <img
                  className="product-avatar"
                  src="images/icons/avatar.png"
                  alt=""
                />
                <span>그랩</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
