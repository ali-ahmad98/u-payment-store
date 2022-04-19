import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, message } from "antd";

import { API_BASE_URL } from "../../config/config";

import classes from "./CreatePage.module.css";

const { Option } = Select;
const { TextArea } = Input;

const CreatePage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/categories/`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onFinish = (values: any) => {
    values.developerEmail = "aliahmad5015@gmail.com";
    axios
      .post(`${API_BASE_URL}/products`, values)
      .then((response) => {
        message.success("Product Created Successfully!!!");
        navigate("/");
      })
      .catch((err) => {
        message.success(err.response.data);
      });
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.mainForm}>
        <h1>Create Product</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input placeholder="Product Name" />
          </Form.Item>

          <Form.Item
            name="description"
            rules={[
              { required: true, message: "Please input product description!" },
            ]}
          >
            <TextArea rows={4} placeholder="Product Description" />
          </Form.Item>

          <Form.Item
            name="avatar"
            rules={[
              { required: true, message: "Please input your image url!" },
            ]}
          >
            <Input placeholder="Image URL" />
          </Form.Item>

          <Form.Item
            name="category"
            rules={[
              {
                required: true,
                message: "Please select category!",
              },
            ]}
          >
            <Select placeholder="Select Categories">
              {categories.map((data: any) => (
                <Option key={data.id} value={data.name}>
                  {data.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="price"
            rules={[{ required: true, message: "Please input product price!" }]}
          >
            <Input placeholder="Price" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
