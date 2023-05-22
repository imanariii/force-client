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
      if (typeof state.user.email === 'string') {
        if (res.data.count===1) {
          state.EditCountCartItem([...newCards ,res.data])
          state.notifySuc('Товар добавлен в корзину')
        } else {
          state.EditCountCartItem([...newCards ,res.data])
          state.notifySuc('Кол-во товара увеличенно')
        }
      } else {
        state.notifyErr('Авторизируйтесь на сайте')
      }


    })
    .catch(err => {
      console.log(err)
    })
}

export default AddToCard;