import  { useState } from 'react'
import AccordianBody from './AccordianBody'
import { HiChevronDown } from "react-icons/hi2";

const Accordian = ({categoryName,items}) => {
          const [menuOpen,setMenuOpen] = useState(true)
     

          console.log(menuOpen);
          

  return (
    <div>
           <div key={categoryName} className="bg-white rounded-lg shadow-md p-6">
            <div className='flex justify-between' onClick={()=> setMenuOpen(!menuOpen)}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-orange-400">
                    {categoryName}
                     <span> ({items.length}) </span>
                    </h2>
                  
                   <p>
                     <HiChevronDown />
                   </p>
            </div>
                  
                {
                     menuOpen &&  <AccordianBody items = {items}/>
                }
            </div>
    </div>
  )
}

export default Accordian