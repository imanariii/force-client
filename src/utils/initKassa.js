import axios from "axios";
import FetchCreateOrder from "./FetchCreateOrder";

const initKassa = (state, result, newOrderId) => {
  let items = []
  state.cards.forEach(card => {
    let data = {}
    data.Name = card.name
    data.Price = card.price
    data.Quantity = Number('1.00')
    data.Amount = card.price * card.count * 100
    data.Tax = 'vat10'
    items.push(data)
    console.log(items)
  })

  let desc = 'Заказ: '
  state.cards.forEach((card,i)=>{
    if (i === state.cards.length) {
      desc += card.name
    } else {
      desc += card.name + ", "
    }
  })
  axios.post(`https://securepay.tinkoff.ru/v2/Init`,{
    "TerminalKey": "1683463385953",
    "Amount": result*100,
    "OrderId": newOrderId,
    "Description": desc,
    "DATA": {
      "Phone": "+79644555563",
      "Email": state.user.email
    },
    "Receipt": {
      "Email": state.user.email,
      "Phone": "+79031234567",
      "EmailCompany": "mr.rabadanov_17@mail.ru",
      "Taxation": "osn",
      "Items": items
    }
  }).then(function (res) {
    console.log(res)
    state.notifySuc(`Заказ #${newOrderId} создан можете оплатить его в вашем профиле!`)
    let ids = '';
    let counts = '';
    state.cards.forEach((cardItem, i) => {
      if (state.cards.length === i) {
        ids += `${cardItem.id}`
        counts += `${cardItem.count}`
      } else {
        ids += `${cardItem.id},`
        counts += `${cardItem.count},`
      }
    })
    FetchCreateOrder(state, ids, counts, result, res.data.PaymentId, res.data.PaymentURL)
    state.RemoveCartItem([])
  }).catch(err => {
    console.log(err)
  })
}

export default initKassa;