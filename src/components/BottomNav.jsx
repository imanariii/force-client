import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import PeopleIcon from "@mui/icons-material/People";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import React from "react";

const BottomNav = ({handleChange, value}) => {
  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} style={{background: 'transparent'}}>
      <BottomNavigationAction
        label="История"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Пользователи"
        value="users"
        icon={<PeopleIcon />}
      />
      <BottomNavigationAction
        label="Продукты"
        value="products"
        icon={<ProductionQuantityLimitsIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNav;