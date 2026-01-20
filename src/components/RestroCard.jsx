import { IMAGE_URL } from "../helper/constants";


 const RestroCard = ({data})=> {
   // console.log(data);
   const {name,cuisines,avgRating,cloudinaryImageId,costForTwo}  = data;
   const {sla} = data;
   const {deliveryTime} = sla;
   const image = IMAGE_URL+cloudinaryImageId;
   console.log(costForTwo);
   
   
    
    return (
         <div className="bg-white rounded-lg shadow-lg p-4 m-2">
            <img className="w-full h-32 object-cover rounded-md" src={image} alt="restro-image" />
            <h2 className="text-lg font-semibold mt-2">Name: {name} </h2>
            <p className="text-sm text-gray-600">Ratings: {avgRating} </p>
            <p className="text-sm text-gray-600">Price: {costForTwo} </p>
            <p className="text-sm text-gray-600"> delivery time : {deliveryTime} </p>
            <p className="text-sm text-gray-600">cuisines: {cuisines.join(", ")} </p>
         </div>
    )
 }

export default RestroCard