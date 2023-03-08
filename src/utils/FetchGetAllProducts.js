import axios from "axios";

const FetchGetAllProducts = (setProducts, page) => {
  page = page || 1
  axios.get(`http://localhost:5000/api/products?page=${page}`)
    .then(function (res) {
      setProducts(res.data.rows)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllProducts;