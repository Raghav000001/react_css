import RestroCard from "./RestroCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"




const Body = ()=> {
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

    
   if (data.length===0) {
      return(
         <Shimmer/>
      )
   }
  


  return (
      <div className="p-4 bg-gray-100 min-h-screen">
         <h1 className="text-2xl font-bold mb-4">Restaurant List</h1>
         <div>
          <input type="text"  
           value={search}
           onChange={()=> {
               const searched = data.filter((res)=> res.info.name.toLowerCase().includes(search.toLowerCase()))
              setFiltered(searched)
           }} 
           onInput={(e)=> setSearch(e.target.value) }  className="bg-gray-300 p-1.5 border-black" />
          <button
           onClick={()=>{
            const topRated = data.filter((res)=> res.info.avgRating>4.5)
            setFiltered(topRated)
           }} 
          className="bg-gray-600 text-white m-1 rounded-md p-3"> Top rated restros </button>
          <button
           onClick={()=> {
            const fastest = data.filter((res)=> res.info.sla.deliveryTime < time)
            console.log(fastest);
            setFiltered(fastest)

           }}
          className="bg-gray-600 text-white m-1 rounded-md p-3"> fastest delivery</button>
          <button className="bg-gray-600 text-white m-1 rounded-md p-3"> high to low </button>
          <button className="bg-gray-600 text-white m-1 rounded-md p-3"> low to high </button>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {
           filtered.map((res)=> <RestroCard key={res.info.id}  data={res.info}/>)
        }
         </div>
      </div>
  )


 }

 export default Body