import React from 'react'
import { motion } from 'framer-motion'

export const TextAnimated = ({ children }) => {
    return (
        <motion.span
            whileHover={{
                display: 'inline-block',
                scaleX: 2,
                color: '#fff',
                rotateZ: '5deg',
                cursor: 'pointer'
            }}
            whileTap={{
                scale: 1.01,
                x: 4,
                y: -3
            }}
            transition={{ type: "spring", stiffness: 700, duration: 1 }}
        >{children}</motion.span>
    )
}

export default TextAnimated