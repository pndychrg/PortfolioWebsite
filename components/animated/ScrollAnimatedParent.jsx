'use client';
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react";


const ScrollAnimatedParent = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
            {children}
        </motion.div>
    )
}

export default ScrollAnimatedParent