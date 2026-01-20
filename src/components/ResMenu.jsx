import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMAGE_URL } from "../helper/constants"
import useRestroDataById from "../hooks/useRestroDataById"
import useRestroMenu from "../hooks/useRestroMenu"


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
                <div key={categoryName} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-400">{categoryName}</h2>
                  
                  <div className="space-y-4">
                    {
                      items.map((i) => (
                        <div key={i.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{i.name}</h3>
                            <span className="text-lg font-bold text-green-600">₹{i.price}</span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3">{i.description}</p>
                          
                          <div className="flex justify-between items-center">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                              {i.isVeg ? "Veg 🟢" : "Non-veg 🔴"}
                            </span>
                            <button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ResMenu