import axios from "axios";

const FetchCreateBrand = async (name) => {
  await axios.post('http://localhost:5000/api/brand', {name: name})
}

export default FetchCreateBrand;