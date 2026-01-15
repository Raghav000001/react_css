import RestroCard from "./RestroCard"
import { useEffect, useState } from "react"




const Body = ()=> {
   const [data,setData] = useState([])
   // const data = resData
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
       } catch (error) {
         console.log(error);
       }
     }




  return (
      <div>
         <div>
          <input type="text" />
          <button
           onClick={()=>{
            const topRated = resData.filter((res)=> res.rating>4.5)
            setData(topRated)
           }} 
          
          className="bg-gray-600 text-white m-1 rounded-md p-3"> Top rated restros </button>
          <button
           onClick={()=> {
            const fastest = resData.filter((res)=> res.deliveryTime < time.toString())
            setData(fastest)

           }}
          className="bg-gray-600 text-white m-1 rounded-md p-3"> fastest delivery</button>
          <button className="bg-gray-600 text-white m-1 rounded-md p-3"> high to low </button>
          <button className="bg-gray-600 text-white m-1 rounded-md p-3"> low to high </button>
         </div>

         {/* properties send */}
         {/* <RestroCard name = {name}  cuisines= {cuisines} ratings = {ratings} deliveryTime = {deliveryTime} />
         <RestroCard name = {"pizza hut"}  cuisines= {["south indian","spanish"]} ratings = {5} deliveryTime = {30+"mins"} /> */}
         {/* {RestroCard(name,cuisines,ratings,deliveryTime)} */}

        {
           data.map((res)=> <RestroCard key={res.info.id}  data={res.info}/>)
        }

      </div>
  )


 }

 export default Body