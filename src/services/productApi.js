import axios from "axios";

export const getProducts = async (callback) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    callback(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailProduct = async (id, callback) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    callback(res.data);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
