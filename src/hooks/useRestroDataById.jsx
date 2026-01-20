import React, { useState,useEffect } from 'react'

const useRestroDataById = (id) => {
   const [resData,setResData] = useState([])
  
     useEffect(()=> {fetchData()},[])
  
      if (!id) return null; 
      
      const fetchData = async()=> {
       try {
         const data = await fetch("http://localhost:3000/data")
         const json = await data.json()
        const finalData = json.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter((res)=> res.info.id===id)
         setResData(finalData[0].info)
         console.log(finalData);
         console.log(finalData);
         
       } catch (error) {
         console.log(error);
       }
     }


   return  resData
}

export default useRestroDataById