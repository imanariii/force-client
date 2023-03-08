import axios from "axios";

const FetchCreateCategory = async (name) => {
  await axios.post('http://localhost:5000/api/category', {name: name})
}

export default FetchCreateCategory;