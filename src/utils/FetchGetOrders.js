import axios from "axios";

const FetchGetOrders = (state, setOrders) => {
  axios.get(`${state.address}/orders`, {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }).then(res => {
    setOrders(res.data)
  }).catch(err => {
    console.log(err)
  })
}

export default FetchGetOrders;