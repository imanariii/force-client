import { Link } from 'react-router-dom';

function MainCategorias () {
  return (
    <div className="categorias__wrapper">
      <div className="categorias-title">
        #1 среди молодежной одежды в Ростове-На-Дону
      </div>
      <div className="categorias-lists">
        <Link to="categorias"><div className="categorias-lists-item"><div><h3>Название категории</h3></div></div></Link>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
        <div className="categorias-lists-item"><div><h3>Название категории</h3></div></div>
      </div>
    </div>
  )
}

export default MainCategorias;
