
const RemoveToCart = (state, id) => {
  state.cards.forEach(item=>{
    if(item.id === id) {
      if(item.count === 1) {
        const cards = state.cards.filter(item => item.id !== id)
        state.RemoveCartItem(cards)
        state.notifySuc('Товар удален из корзины')
      } else {
        const newItem = item;
        newItem.count = newItem.count - 1;
        const newCards = state.cards.filter(item => item.id !== id)
        state.EditCountCartItem([...newCards ,newItem])
        state.notifySuc('Кол-во товара уменьшенно')
      }
    }
  })


}

export default RemoveToCart;