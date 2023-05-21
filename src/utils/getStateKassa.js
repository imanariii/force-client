import axios from "axios";
import sha256 from "./sha";

const getStateKassa = (state, paymentId, setStatus) => {
  const tokenSha = sha256(`7oq5fnq9eklk6tue${paymentId}1683463385953`);
  try {
    axios.post(`https://securepay.tinkoff.ru/v2/GetState`,{
      "TerminalKey" : "1683463385953",
      "PaymentId" : paymentId,
      "Token" : tokenSha
    }).then(function (res) {
      if(res.data.Message === "Неверный статус транзакции.") {
        setStatus('Время оплаты истекло')
      }
      switch (res.data.Status) {
        case "NEW":
          setStatus('Платеж не оплачен')
          break;
        case "FORM_SHOWED":
          setStatus('Платеж не оплачен')
          break;
        case "CONFIRMED":
          setStatus('Платеж оплачен')
          break;
      }
    }).catch(err => {
      console.log(err)
    })
  } catch (e) {
    console.log(e)
  }
}

export default getStateKassa;