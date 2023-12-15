'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
const svgVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    },
}


const AnimatedSvg = () => {

    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);


    return (
        <motion.svg
            variants={svgVariants}
            initial="hidden"
            animate={controls}
            style={{ transition: 'all 0.3s ease 0s' }}

            strokeWidth="0"
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
        >
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(174, 210, 255, 1)" offset="0%"></stop>
                    <stop id="stop2" stopColor="rgba(228, 241, 255, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient)"
                d="M28.8,-29.4C36.5,-21.1,41.2,-10.6,41.5,0.3C41.8,11.1,37.6,22.3,29.9,29.2C22.3,36.2,11.1,38.9,-0.1,39C-11.3,39.1,-22.6,36.6,-30.6,29.6C-38.5,22.6,-43.1,11.3,-41.9,1.2C-40.8,-9,-33.8,-17.9,-25.9,-26.2C-17.9,-34.4,-9,-41.9,0.8,-42.7C10.6,-43.5,21.1,-37.6,28.8,-29.4Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                style={{ transition: 'all 0.3s ease 0s' }}
                strokeWidth="0"
            ></path>
        </motion.svg>

    )
}

export default AnimatedSvg