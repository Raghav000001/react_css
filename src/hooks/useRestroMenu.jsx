import { useState,useEffect } from 'react'

const useRestroMenu = (id) => {
   const [menu,setMenu] = useState({})

    useEffect(()=> {fetchData()},[])

      const fetchData = async()=> {
       try {  
        const menu = await fetch(`http://localhost:3500/${id}`)
        const menuJson = await menu.json()
        setMenu(menuJson.menu)
       } catch (error) {
         console.log(error);
       }
     }


  return menu
}

export default useRestroMenu