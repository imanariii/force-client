import axios from "axios";

const AddToCard = (state, id) => {
  axios.get(`${state.address}/products/${id}`)
    .then(function (res) {
      state.cards.map(item=>{
        if(item.id===id) {
          res.data.count = item.count+1;
          console.log(item.count)
        }
      })

      const newCards = state.cards.filter(item=>item.id!==id)
      state.EditCountCartItem([...newCards ,res.data])
      if (res.data.count===1) {
        state.notifySuc('Товар добавлен в корзину')
      } else {
        state.notifySuc('Кол-во товара увеличенно')
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export default AddToCard;