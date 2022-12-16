import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';

const BottomNav = ({handleChange, value}) => {
  return (
    <BottomNavigation value={value} onChange={handleChange} style={{background: 'transparent'}}>
      <BottomNavigationAction
        label="Создание бренда"
        value="brands"
        icon={<AddBusinessTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Создание категории"
        value="categories"
        icon={<SellTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Создание продукты"
        value="add-products"
        icon={<NoteAddTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Все продукты"
        value="products"
        icon={<ShoppingBagTwoToneIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNav;