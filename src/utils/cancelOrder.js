import axios from "axios";
import sha256 from "./sha";

const cancelOrder = (state, order) => {
  const tokenSha = sha256(`7oq5fnq9eklk6tue${order.paymentId}1683463385953`);
  axios.delete(`${state.address}/orders/${order.id}`)
    .then(function (res) {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  axios.post('https://securepay.tinkoff.ru/v2/Cancel', {
    "TerminalKey" : "1683463385953",
    "PaymentId" : order.paymentId,
    "Token" : tokenSha
  }) .then(function (res) {
    console.log(res)
  })
    .catch(err => {
      console.log(err)
    })
}

export default cancelOrder;