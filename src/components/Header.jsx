import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';
import userContext from '../context/userContext';

const Header = ()=> {

     const onlineStatus = useUserStatus()
      // console.log(onlineStatus);

       const data = useContext(userContext)
      //  console.log(data);
       const {isLoggedIn,username} = useContext(userContext)       
      

     return(
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="text-2xl font-bold text-red-600">
              Foodlie
          </div>
            <ul className="flex gap-5">
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
               <li className=" p-1 cursor-pointer rounded-4xl bg-black text-white">
                 <Link>  
                   {isLoggedIn ? username : "please log-in" }
                 </Link>
                </li>
            </ul>
        </div>
     )
 }
 
 export default Header