import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col, Spin } from "antd";

import Categories from "./Categories";

import { API_BASE_URL } from "../../config/config";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/products/`)
      .then((response) => {
        setAllProducts(response.data);
        setShowProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const onProductClick = (prodId: Number) => {
    navigate(`/product/${prodId}`);
  };

  if (loading)
    return (
      <div className={classes.makeCentered}>
        <Spin size="large" />
      </div>
    );

  return (
    <div>
      <Row>
        <Col span={12}>
          <h3 className={classes.title}>Products</h3>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Categories
            allProducts={allProducts}
            setShowProducts={setShowProducts}
          />
        </Col>
      </Row>

      <br />
      <Row className={classes.productContainer} gutter={30}>
        {showProducts.map((prod: any, index) => (
          <Col xl={6} md={8} sm={12} xs={24} key={index}>
            <div
              className={classes.productCard}
              onClick={() => onProductClick(prod.id)}
            >
              <div className={classes.productImg}>
                <img src={prod.avatar} alt=" No Avatar Found" />
              </div>
              <p>{prod.name}</p>
              <p>${prod.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
