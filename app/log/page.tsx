import { BentoTrackerCards } from '@/components/bento-grid/BentoTrackerCards'
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
         <BentoTrackerCards/>
      </section>
    </div>
  )
}

export default Page
