import React from 'react';
import { Link } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';

const Header = ()=> {

     const onlineStatus = useUserStatus()
      // console.log(onlineStatus);
      

     return(
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="text-2xl font-bold text-red-600">
              Foodlie
          </div>
            <ul className="flex space-x-4">
               <li className="hover:text-red-500 cursor-pointer">
                 <Link to={"/"}>
                   home  
                 </Link>
              </li>
               <li className="hover:text-red-500 cursor-pointer">
                 <Link to={"/about"}> 
                 about 
                 </Link>
                </li>
                  <li className="hover:text-red-500 cursor-pointer">
                 { 
                      onlineStatus===true ? "Online 🟢" : "Offline 🔴"
                 }
                </li>
               <li className="hover:text-red-500 cursor-pointer">
                 <Link to={"/cart"}>  
                 cart
                 </Link>
                </li>
               <li className="hover:text-red-500 cursor-pointer">
                 <Link>  
                  login/sign-in
                 </Link>
                </li>
            </ul>
        </div>
     )
 }
 
 export default Header