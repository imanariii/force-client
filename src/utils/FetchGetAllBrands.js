import axios from "axios";

const FetchGetAllBrands = (setBrands) => {
  axios.get('http://localhost:5000/api/brand')
    .then(function (res) {
      setBrands( res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllBrands;