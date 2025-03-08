import { BentoTrackerCards } from '@/components/bento-grid/BentoTrackerCards'
import React from 'react'

const BroDetails = [
    {
        title: "Chest",
        description: "Impower your lifts on chest day.",
        src: "/Chest"
    },
    {
        title: "Chest",
        description: "Impower your lifts on chest day.",
        src: "/Back"
    },
    {
        title: "Chest",
        description: "Impower your lifts on chest day.",
        src: "/Legs"
    },
    {
        title: "Chest",
        description: "Impower your lifts on chest day.",
        src: "/Shoulders"
    },
    {
        title: "Chest",
        description: "Impower your lifts on chest day.",
        src: "/Arms"
    },
]


const Page = () => {
  return (
    <div>
      <section className='my-5 flex justify-center items-center flex-wrap gap-5'>
         <BentoTrackerCards details={BroDetails}/>
      </section>
    </div>
  )
}

export default Page
