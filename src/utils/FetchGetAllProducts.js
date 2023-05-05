import axios from "axios";
import { useContext } from "@types/react";
import { Api } from "../context/Api";

const FetchGetAllProducts = (setProducts, page, state) => {
  page = page || 1
  axios.get(`${state.address}/products?page=${page}`)
    .then(function (res) {
      setProducts(res.data.rows)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllProducts;