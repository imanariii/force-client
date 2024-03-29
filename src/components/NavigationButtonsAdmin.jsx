import '../styles/adminpanel.css';
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import SellTwoToneIcon from "@mui/icons-material/SellTwoTone";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { useNavigate } from "react-router-dom";
import { Api } from "../context/Api";
import { useState, useContext, useEffect } from "react";

const NavigationButtonsAdmin = ({value}) => {
  const state = useContext(Api)
  const [navValue, setNavValue] = useState(value);

  const navigate = useNavigate();

  const navHandleChange = (event, newValue) => {
    setNavValue(newValue);
  };
  useEffect(()=>{
    navigate(`../${navValue}`)
  }, [navigate, navValue])
  return (
    <BottomNavigation value={navValue} onChange={navHandleChange} style={{background: state.theme === 'dark' ? '#343434' : 'white'}}>
      <BottomNavigationAction
        label="Создание бренда & категории"
        value="brands"
        icon={<AddBusinessTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Все платежи"
        value="category"
        icon={<SellTwoToneIcon />}
      />
      <BottomNavigationAction
          label="Создание продукты"
          value="add-product"
          icon={<NoteAddTwoToneIcon />}
      />
      <BottomNavigationAction
        label='Все продукты'
        value="products"
        icon={<ShoppingBagTwoToneIcon />}
      />
    </BottomNavigation>
  )
}

export default NavigationButtonsAdmin;
