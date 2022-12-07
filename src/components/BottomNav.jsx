import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';

const BottomNav = ({handleChange, value}) => {
  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} style={{background: 'transparent'}}>
      <BottomNavigationAction
        label="Бренды"
        value="brands"
        icon={<AddBusinessTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Категории"
        value="categories"
        icon={<SellTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Продукты"
        value="products"
        icon={<ShoppingBagTwoToneIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNav;