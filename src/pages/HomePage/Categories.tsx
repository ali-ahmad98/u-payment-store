import { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";

import { API_BASE_URL } from "../../config/config";

const { Option } = Select;

interface ICategories {
  allProducts: any;
  setShowProducts(prod: any): void;
}

const Categories = (props: ICategories) => {
  const [categories, setCategories] = useState([]);

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

  function handleChange(selectedCategory: string) {
    const filteredProducts = props.allProducts.filter(
      (prod: any) => prod.category === selectedCategory
    );
    props.setShowProducts(filteredProducts);
  }

  return (
    <Select
      placeholder="Select Categories"
      style={{ width: 150 }}
      onChange={handleChange}
    >
      {categories.map((data: any) => (
        <Option key={data.id} value={data.name}>
          {data.name}
        </Option>
      ))}
    </Select>
  );
};

export default Categories;
