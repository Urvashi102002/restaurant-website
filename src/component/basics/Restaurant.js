import React from 'react'
import './style.css'
import Menu from './menuApi.js';
import { useState } from 'react';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
   ...new Set(
  Menu.map((currElem) =>{
    return currElem.category;
  })
),
"All",
];

console.log(uniqueList);





function Restaurant ()  {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);



   // console.log(menuData);

   const filterItem =(category) => {
    if (category === "All"){
      setmenuData(Menu);
      return;
    }

   const updatedList = Menu.filter((currElem)=>{
    return currElem.category === category;
   })
   setmenuData(updatedList);
  };
  return (
    <>
    
   
   
   
   <Navbar filterItem={filterItem} menuList ={menuList}/>
    <MenuCard menuData ={menuData}/> 
    
    
    
    
    </>
  )
}

export default Restaurant