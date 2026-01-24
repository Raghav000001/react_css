import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMAGE_URL } from "../helper/constants"
import useRestroDataById from "../hooks/useRestroDataById"
import useRestroMenu from "../hooks/useRestroMenu"
import Accordian from "./Accordian"


const ResMenu = () => {
    
        const {id} = useParams()
        const resData = useRestroDataById(id)
        const menu = useRestroMenu(id)
        

   
      const image = IMAGE_URL+resData.cloudinaryImageId

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 p-6">
        {/* restro data */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{resData.name}</h1>
            <div className="mb-6">
              <img src={image} alt={resData.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-yellow-600">⭐ {resData.avgRating}</span>
            </div>
          </div>

          {/* restro menu */}
          <div className="space-y-8">
            {
              Object.entries(menu).map(([categoryName, items]) => (
               <Accordian
               categoryName = {categoryName}
               items = {items}
               />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ResMenu