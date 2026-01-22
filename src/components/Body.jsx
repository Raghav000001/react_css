import RestroCard from "./RestroCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useRestroData from "../hooks/useRestroData"
import useUserStatus from "../hooks/useUserStatus"
import { cardWithLabel } from "./RestroCard"




const Body = ()=> {
   const onlineStatus = useUserStatus()
 
   let time = 30

      const RestroCardWithLabel = cardWithLabel(RestroCard)

    
     const {data,search,filtered,setFiltered,setSearch} = useRestroData()
     console.log(data);
     

    
   if (data.length===0) {
      return(
         <Shimmer/>
      )
   }

   if (!onlineStatus) {
      return (<h1> seems like you're offline!!!!! </h1>)      
   }
    

const getCost = (str) => {
  return Number(str.replace(/\D/g, "")); 
};

  


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
           onInput={(e)=> setSearch(e.target.value) } 
            className="bg-gray-300 p-1.5 rounded-md border-black" />
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
          <button
          onClick={()=> {
                const sorted = [...data].sort((a,b)=> getCost(b.info.costForTwo) - getCost( a.info.costForTwo))
                setFiltered(sorted)
          }}
          className="bg-gray-600 text-white m-1 rounded-md p-3"> high to low </button>
          <button
           className="bg-gray-600 text-white m-1 rounded-md p-3"> low to high </button>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
           filtered.map((res)=>
             <Link to={`restro/menu/${res.info.id}`} key={res.info.id}> 
              {
                  res.info.isOpen ?  <RestroCardWithLabel data={res.info}/>  : <RestroCard  data={res.info}/>
              }
              </Link>)
        }
         </div>
      </div>
  )


 }

 export default Body