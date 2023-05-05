import axios from "axios";

const FetchGetAllBrands = (setBrands, state) => {
  axios.get(`${state.address}/brand`)
    .then(function (res) {
      setBrands( res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllBrands;