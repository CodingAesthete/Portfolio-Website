'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-10 md:py-12">
      <div className="grid grid-cols-1 md:gap-x-4 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Hello, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Alex',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-justify mb-6 lg:text-xl">
            I am a 25-year-old motivated entry-level/junior software developer. I am dedicated to improving
            my skills through hands-on learning and development work. I have previous
            experience as an intern in CSoft with C++. In the last year and a half I have
            been mostly focusing on HTML, CSS, JS, jQuery, React and the MERN stack.
          </p>
          <div className='mt-8'>
            <a href="#contact" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black'>
              Message Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-black w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/aiii3.png"
              alt="hero image"
              className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
