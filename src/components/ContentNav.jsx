
const ContentNav = ({value}) => {
  switch (value) {
    case 'users':
      return <h1>Контент с пользователями</h1>
    case 'products':
      return <h1>Контент с продуктами</h1>
    default:
      return <h1>Контент истории заказов</h1>
  }
}

export default ContentNav;