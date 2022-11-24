import { Button } from "@mui/material";

const CategoriasCard = () => {
  return (
    <div className="wrapper__categories-card">
      <div className="body__categories-card">
        <div className="categories-card-txt">
          <h3>Название категории</h3>
          <Button variant="contained">Перейти</Button>
          <p>Здесь должна распологаться информация о карточке категории.</p>
        </div>
      </div>
    </div>
  )
}

export default CategoriasCard;