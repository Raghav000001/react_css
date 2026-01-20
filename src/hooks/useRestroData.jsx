import React from 'react'
import { useState,useEffect } from 'react'

const useRestroData = () => {
     const [data,setData] = useState([])
      const [filtered,setFiltered] = useState([])
      const [search,setSearch] = useState("")
   
      let time = 30
   
       useEffect(()=> {
                fetchData()
       },[])
        const fetchData = async()=> {
          try {
            const data = await fetch("http://localhost:3000/data")
            const json = await data.json()
           const finalData = json.cards[1].card.card.gridElements.infoWithStyle.restaurants;
           console.log(finalData);
           setData(finalData)
           setFiltered(finalData)
          } catch (error) {
            console.log(error);
          }
        }
   
        return {data,filtered,search}

}

export default useRestroData