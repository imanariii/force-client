import axios from "axios";

const FetchGetOneUser = (id, state) => {
  axios.get(`${state.address}/user/${id}`)
    .then(function (res) {
      state.setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default FetchGetOneUser;