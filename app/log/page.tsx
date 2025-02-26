import { ThreeDCardDemo } from '@/component/ui/ThreeDCardDemo'
import { SearchCheck } from 'lucide-react'
import Link from 'next/link'
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
    {
        group: "Back",
        src: "/Back.jpg"
    },
]

const Page = () => {
  return (
    <div>
      <h1 className='text-center bg-red-600 p-4 mt-0'>Lift logger</h1>
      <section className='flex justify-center items-center flex-wrap gap-x-5'>
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
