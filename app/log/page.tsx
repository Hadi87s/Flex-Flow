import { ThreeDCardDemo } from '@/component/ui/ThreeDCardDemo'
import React from 'react'

const data = [
    {
        group: "Chest",
        src: "/Chest.jpg"
    },
    {
        group: "Back",
        src: "/Back.jpg"
    },
    {
        group: "Legs",
        src: "/Back.jpg"
    },
    {
        group: "Back",
        src: "/Back.jpg"
    },
    {
        group: "Back",
        src: "/Back.jpg"
    },
    {
        group: "Back",
        src: "/Back.jpg"
    },
    {
        group: "Back",
        src: "/Back.jpg"
    },
]

const Page = () => {
  return (
    <div>
      <h1 className='text-center bg-red-600 p-4 mt-0'>Lift logger</h1>
      <section className='my-5 flex justify-center items-center flex-wrap gap-5'>
         {
            data.map((item, index)=> (
                <ThreeDCardDemo  key={index}  src={item.src} group={item.group}/>
            ))
         }
      </section>
    </div>
  )
}

export default Page
