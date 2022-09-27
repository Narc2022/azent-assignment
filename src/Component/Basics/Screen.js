import React, { useState } from 'react'
import './style.css'
import Menu from "./menuApi"
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem) =>{
        return curElem.country;
     }
    )
  ),"All",
];


const Screen = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

    const filterItem = (country) =>{
      if(country==="All"){
        setMenuData(Menu);
        return;
      }

        const updatedList = Menu.filter((curElem) =>{
          return curElem.country === country;
        });

        setMenuData(updatedList);
    };
    return (
      <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuProps={menuData}/>
      </>
    )
}

export default Screen