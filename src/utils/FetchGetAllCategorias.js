import axios from "axios";

const FetchGetAllCategorias = (setCategorias) => {
  axios.get('http://localhost:5000/api/category')
    .then(function (res) {
      setCategorias(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllCategorias