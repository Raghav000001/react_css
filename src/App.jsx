import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./components/About"
import Cart from "./components/Cart"
import ErrorPage from "./components/ErrorPage"

const App = ()=> {
 
    const routes = createBrowserRouter([
         {
            path:"/",
            element:<Home/>,
            errorElement:<ErrorPage/>,
            children:[
              {
                 path:"/",
                 element:<Body/>
              }
               ,{
            path:"/about",
            element:<About/>
            }, 
           {
            path:"/cart",
            element:<Cart/>
            }]
         },
       ])
       

 
     return(
       <RouterProvider router={routes} /> 
     )
    
}


export default App


