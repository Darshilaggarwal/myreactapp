import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {


    const data = [
        {
            descp: "this is document 10",

            filesize: "2.4mb",
            closed: false ,
            tag: { isOpen: true, tagTitle: "Download Now" , },
        },

        {
            descp: "this is document 20",
            filesize: "0.9mb",
            closed: true ,
            tag: { isOpen: true, tagTitle: "Continue reading" , tagColor: "blue"},
        },

        {
            descp: "this is document 30",
            filesize: "6.9mb",
            closed: false ,
            tag: { isOpen: true, tagTitle: "Download Now" , tagColor: "green"},
        },
    ];

    // useState()
  return (
    <div  className='h-full w-full bg-sky-200\50 z-[3] fixed flex gap-7 flex-wrap p-10'>

        {data.map((item ,  index)=>(
                <Card  data={item} />
        ))}
        

        



    </div>



  )
}

export default Foreground