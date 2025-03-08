import { BentoTrackerCards } from '@/components/bento-grid/BentoTrackerCards'
import React from 'react'

const Page = () => {
  return (
    <div>
      <section className='my-5 flex justify-center items-center flex-wrap gap-5'>
         <BentoTrackerCards />
      </section>
    </div>
  )
}

export default Page
