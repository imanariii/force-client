import axios from "axios";

const FetchCreateOrder = (state, ids, counts, result, paymentId, paymentUrl) => {
  axios.post(`${state.address}/orders`, {
    "productId": ids,
    "counts": counts,
    "price": result,
    "address": state.user.address,
    "paymentId": paymentId,
    "paymentUrl": paymentUrl
  }, {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }).then(function (res) {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

export default FetchCreateOrder;