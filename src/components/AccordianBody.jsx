import React, { useContext } from 'react'
import userContext from '../context/userContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

const AccordianBody = ({items}) => {
   
    const dispatch = useDispatch()

    const {isLoggedIn,username} = useContext(userContext)

   
  return (
    <div>
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

                            <button
                             onClick={()=> {
                                dispatch(addToCart(i,i.id))
                             }} 
                            className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
    </div>
  )
}

export default AccordianBody