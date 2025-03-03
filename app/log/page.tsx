import { BentoTrackerCards } from '@/components/bento-grid/BentoTrackerCards'
import { ThreeDCardDemo } from '@/components/ui/ThreeDCardDemo'
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
      <section className='my-5 flex justify-center items-center flex-wrap gap-5'>
         {/* {
            data.map((item, index)=> (
                <ThreeDCardDemo  key={index}  src={item.src} group={item.group}/>
            ))
         } */}
         <BentoTrackerCards/>
      </section>
    </div>
  )
}

export default Page
