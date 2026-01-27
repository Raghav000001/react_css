import { createContext } from "react";

   const userContext = createContext({
         username:"guest",
         isLoggedIn:false
   })


   export default userContext;