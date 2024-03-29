import React, { useEffect, useRef } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion';

export const FromBottom = ({ children, delay, duration, classNames }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true })
    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start("visible")
        }
    }, [inView])

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: duration ?? 2, delay: delay ?? 1 }}
            className={classNames}
            ref={ref} style={{ position: 'relative' }}
        >
            {children}
        </motion.div>
    )
}

