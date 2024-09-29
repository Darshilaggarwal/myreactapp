import React from 'react';
import {motion} from "framer-motion";

import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Card = ({ data , reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='h-72 w-60 relative rounded-[50px] bg-zinc-900/80 p-5 overflow-hidden'>

    <FaRegFileAlt />

    <p className='text-white text-xs font-semibold leading-tight mt-5 p-5'>
       {data.descp}
    </p>

    <div className='footer w-60 left-0  absolute bottom-0 '>
        
        <div className='flex justify-between px-9 my-10 items-center  '> 
        <h5 > {data.filesize} </h5>
        
        <span className='w-7 h-7 rounded-[50px] bg-slate-400 justify-center items-center flex'>
        
        
        {data.closed ? <IoClose /> :  <MdOutlineFileDownload /> }
        </span>
        </div>
        {data.tag.isOpen ? (

        <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-500 " : "bg-green-500"}`}>
        <h3 className=' text-sm items-center justify-center flex'> 

            {data.tag.tagTitle}


</h3>
</div>
        ) : null }
        

        
    </div>
     

        </motion.div>
  )
}

export default Card