import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import userContext from '../context/userContext'     
import { useEffect, useState } from 'react'

    const Home = () => {
      const [name,setName] = useState("")
      const [login,setLogin] = useState(null)
           
          useEffect(()=> {
            //  user data
            const data = {
               username:"raghav",
               login:true
            }
             setName(data.username)
             setLogin(data.login)
          },[])




      return (
        <userContext.Provider value={{username:name,isLoggedIn:login}}>
         <Header/>
         <Outlet/>
        </userContext.Provider>
      )
    }
    
    export default Home