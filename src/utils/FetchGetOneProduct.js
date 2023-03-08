import axios from "axios";

const FetchGetOneProduct = (id, setActiveCard) => {
  axios.get(`http://localhost:5000/api/products/${id}`)
    .then(function (res) {
      setActiveCard(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetOneProduct;