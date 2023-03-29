import '../styles/adminpanel.css';
import React, { useState, useContext, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { useNavigate } from "react-router-dom";
import { Api } from '../context/Api';

const NavigationButtonsCategory = ({value}) => {
  const state = useContext(Api)
  const [navValue, setNavValue] = useState(value);

  const navigate = useNavigate();

  const navHandleChange = (event, newValue) => {
    setNavValue(newValue);
  };
  useEffect(()=>{
    navigate(`../${navValue}`)
  }, [navValue])
  return (
    <BottomNavigation value={navValue} onChange={navHandleChange} style={{background: state.theme === 'dark' ? '#343434' : 'white'}}>
      <BottomNavigationAction
        label="Обувь"
        value="sneaks"
        icon={<AddBusinessTwoToneIcon />}
      />
      <BottomNavigationAction
          label="Худи"
          value="hoodie"
          icon={<NoteAddTwoToneIcon />}
      />
      <BottomNavigationAction
        label='Штаны'
        value="trousers"
        icon={<ShoppingBagTwoToneIcon />}
      />
    </BottomNavigation>
  )
}

export default NavigationButtonsCategory;