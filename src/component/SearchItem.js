

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Shope2 from '../pages/Shope2';
const SearchItem = () => {


  const {term} = useParams();
  const [filterData, setfilterData] = useState([]);
  const [data, setData] = useState([]);





  useEffect(() => {
    const getProducts = async () => {
      try {
     
        const res = await fetch(`https://dummyjson.com/products`);
        const result = await res.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } 
      
      
    };
    getProducts();
  }, []);


  useEffect(()=>{
    const SearchData =()=>{
      const search = data.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
  // console.log(search)
  setfilterData(search)
    }
     SearchData()
  },[term , data])




  return (
    <div>SearchItem
      <Shope2   data = {filterData}   /> 
    </div>
  )
}

export default SearchItem