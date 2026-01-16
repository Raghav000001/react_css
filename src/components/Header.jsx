import React from 'react';

const Header = ()=> {
     return(
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="text-2xl font-bold text-red-600">
              Foodlie
          </div>
            <ul className="flex space-x-4">
               <li className="hover:text-red-500 cursor-pointer">home</li>
               <li className="hover:text-red-500 cursor-pointer">about</li>
               <li className="hover:text-red-500 cursor-pointer">cart</li>
               <li className="hover:text-red-500 cursor-pointer">login/sign-in</li>
            </ul>
        </div>
     )
 }
 
 export default Header