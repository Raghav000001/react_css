import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

      const error = useRouteError()
      const navigate = useNavigate()
      console.log(error);
      

  return (
    <div>
        this is an error page

        <h2>
             {
                error.data
             }
        </h2>
        <h3>
           status: {error.status}
        </h3>

        <button
         onClick={()=> navigate("/")} 
        className="bg-gray-600 text-white m-1 rounded-md p-3">
            Back to home page
        </button>
    </div>
  )
}

export default ErrorPage