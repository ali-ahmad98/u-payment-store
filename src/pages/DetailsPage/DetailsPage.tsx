import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Spin } from "antd";

import { API_BASE_URL } from "../../config/config";

import classes from "./DetailsPage.module.css";
import "./DetailsPage.module.css";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setproduct] = useState<any>();
  let params = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/products/${params.prodId}`)
      .then((response) => {
        setproduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className={classes.makeCentered}>
        <Spin size="large" />
      </div>
    );

  return (
    <>
      {product ? (
        <div>
          <Row className={classes.productContainer} gutter={30}>
            <Col span={8}>
              <img src={product.avatar} alt="No Avatar Found" />
            </Col>
            <Col span={16}>
              <h1>{product.name}</h1>
              <h3>${product.price}</h3>
            </Col>
          </Row>
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <div className={classes.makeCentered}>
          <h1>No Product Found</h1>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
