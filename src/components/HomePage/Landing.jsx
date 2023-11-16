import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { MAIN_COLOR, colors } from '../../utils';

const nameHover = {
  scaleX: 1.5,
  color: 'black',
  background: 'black',
  textShadow: '-1px -1px 0 #fafa1f, 1px -1px 0 #fafa1f,-1px  1px 0 #fafa1f, 1px  1px 0 #fafa1f',
  y: -30
}


const Landing = () => {
  return (
    <section className='w-full text-center md:text-justify h-screen grid place-items-center'>
      <div className='relative'>
        <motion.h1
          whileTap={{
            scaleX: 1.5,
          }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className={`tracking-[1px] text-[3em] font-bold text-[#fafa1f] flex flex-col md:flex-row gap-4 cursor-pointer`}
        // style={{textShadow:'-1px -1px 0 #a956f7fe, 1px -1px 0 white,-1px  1px 0 #a956f7fe,1px  1px 0 #a956f7fe'}}
        >
          <motion.span whileHover={nameHover} > Hello, I'm</motion.span>
          <motion.span whileHover={nameHover} > Sandhu</motion.span>
          <motion.span whileHover={nameHover} > Babu</motion.span>
        </motion.h1>


        <p className='tracking-[1px]'>I am a Software Developer</p>

        <div className='flex gap-2 mt-5 justify-center md:justify-start'>
          <motion.a
            whileHover={{
              scale: 4,
              height: '100%'
            }}
            className={`hover:text-[#fafa1f] text-xl`}
            href="https://www.instagram.com/sandhubabu_/" target='_blank'>
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 4,
              height: '100%'
            }}
            className={`hover:text-[#fafa1f] text-xl`}
            href="https://twitter.com/sandhubabu_" target='_blank'>
            <FaXTwitter />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 4,
              height: '100%'
            }}
            className={`hover:text-[#fafa1f] text-xl`}
            href="https://github.com/SandhuBabu" target='_blank'>
            <FiGithub />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 4,
              height: '100%'
            }}
            className={`hover:text-[#fafa1f] text-xl`}
            href="https://www.facebook.com/sandhu.babu.75?mibextid=ZbWKwL" target='_blank'>
            <FiFacebook />
          </motion.a>
        </div>

        <motion.button
          whileTap={{
            rotateX: '20deg',
            rotateZ: '5deg',
            rotateY: '10deg',
            boxShadow: '10px 3px 25px #fafa1f',
            background: 'black'
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`bg-[#fafa1f] text-black active:text-white w-[14em] h-[4em] mt-[2em] rounded-md font-medium shadow-xl`}
        >Contact Me
        </motion.button>
      </div>
    </section>
  )
}

export default Landing