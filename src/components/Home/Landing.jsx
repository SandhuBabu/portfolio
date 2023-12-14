import React from 'react'
import './home.scss'
import TextAnimated from '../Animations/TextAnimated'
import { FromBottom } from '../../reveal/FromBottom'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const NAME = 'SANDHU BABU'
const HI = ['Hi', ' ', "I'm"]
const TITLE = 'SOFTWARE DEVELOPER'

const Landing = () => {
    return (
        <div className='landing'>

            <FromBottom delay={0} duration={0.5}>
                <h1>
                    {HI.map((i, k) => <TextAnimated key={k}>{i}</TextAnimated>)}
                </h1>
            </FromBottom>
            <FromBottom delay={0.5} duration={0.5}>
                <h1 className='name'>
                    {NAME.split('').map((text, k) => <TextAnimated key={k}>{text}</TextAnimated>)}
                </h1>
            </FromBottom>
            <FromBottom delay={0.65} duration={0.5}>
                <p style={{ fontSize: '1.15em' }}>
                    {TITLE.split('').map((text, k) => <TextAnimated key={k}>{text}</TextAnimated>)}
                </p>
            </FromBottom>


            <div className='landing-socials'>
                <motion.a
                    href='/'
                    target='_blank'
                    animate={{
                        scale: [1, 0, 0, 1, 1],
                        rotate: [0, 180, 270, 360],
                    }}
                    whileHover={{
                        rotateZ:'50deg'
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '1.5em' }}
                >
                    <FaInstagram />
                </motion.a>
                <motion.a
                    href='/'
                    target='_blank'
                    animate={{
                        scale: [1, 0, 0, 1, 1],
                        rotate: [0, 180, 270, 360],
                    }}
                    whileHover={{
                        rotateZ:'50deg'
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '1.5em' }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href='/'
                    target='_blank'
                    animate={{
                        scale: [1, 0, 0, 1, 1],
                        rotate: [0, 180, 270, 360],
                    }}
                    whileHover={{
                        rotateZ:'50deg'
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '1.5em' }}
                >
                    <FaGithub />
                </motion.a>
            </div>
        </div >
    )
}

export default Landing


