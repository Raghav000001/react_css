import { IMAGE_URL } from "../helper/constants";


 const RestroCard = ({data})=> {
   console.log(data);
   
   // const name = data.name
   const {name,cuisines,avgRating,
      cloudinaryImageId}  = data
   const {sla} = data
   const {deliveryTime} = sla

   const image = IMAGE_URL+cloudinaryImageId
    
   
   // console.log(props);

   //  const {name,ratings,deliveryTime,cuisines}  = props 
    //  image,name,ratings,deliveryTime,cuisines

    return (
         <div className="bg-red-100 w-32  border">
            <img src={image} alt="restro-image" />
            <h2> {name} </h2>
            <p> {avgRating} </p>
            <p> {deliveryTime} </p>
            <p> {cuisines.join(", ")} </p>
            <h2>card</h2>
         </div>
    )
   

 }

export default RestroCard