import React, { useEffect, useRef } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion';

export const Reveal = ({children}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true })
    const mainControl = useAnimation();

    useEffect(() => {
        if(inView) {
            mainControl.start("visible")
        }
    }, [inView])

    return (
        <section ref={ref} style={{overflow:'hidden', position: 'relative'}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.75, delay: 1 }}
            >
                {children}
            </motion.div>
        </section>
    )
}

