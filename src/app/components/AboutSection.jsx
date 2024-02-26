import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about2.png" width={500} height={500} alt="" />
      </div>
    </section>
  )
}
