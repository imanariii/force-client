import axios from "axios";

const FetchGetOneProduct = (id, setActiveCard, state) => {
  axios.get(`${state.address}/products/${id}`)
    .then(function (res) {
      setActiveCard(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetOneProduct;