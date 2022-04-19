import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(`/`);
  };

  const onCreateClick = () => {
    navigate(`/create-product`);
  };

  return (
    <div className={classes.NavbarContainer}>
      <h1 className={classes.float} onClick={onCreateClick}>
        +
      </h1>
      <Row>
        <Col span={12}>
          <h2 onClick={onLogoClick}>UPayments Store</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <h2 onClick={onCreateClick}>Register</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
