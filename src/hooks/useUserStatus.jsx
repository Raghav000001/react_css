import React, { useEffect, useState } from 'react'

const useUserStatus = () => {
     const [onlineStatus,setOnlineStatus] = useState(true)

      useEffect(()=> {
        window.addEventListener("online",()=> {
           setOnlineStatus(true)
      })

      window.addEventListener("offline",()=> {
         setOnlineStatus(false)
      })
  
      },[])

    return  onlineStatus
}

export default useUserStatus