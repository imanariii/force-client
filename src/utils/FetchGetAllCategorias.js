import axios from "axios";

const FetchGetAllCategorias = (setCategorias, state) => {
  axios.get(`${state.address}/category`)
    .then(function (res) {
      setCategorias(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetAllCategorias