'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedSvg from "./AnimatedSvg";

const divVariant = {
    hover: {
        x: [10, 0, -10, 0, 10],
        y: [0, 10, 0, -10, 0],
        rotate: [0, 180, -180, 0],
        scale: 1.1,
        transition: {
            x: {
                ease: 'linear',
                duration: 4,
                repeat: Infinity,
            },
            y: {
                ease: 'linear',
                repeat: Infinity,
                duration: 4,
            },
            rotate: {
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4
            }
        }
    }
}

const AnimatedAboutImage = () => {
    return (
        <>
            <motion.div
                variants={divVariant}
                whileHover="hover"
                whileTap="hover"
                className=" relative"
            >
                <AnimatedSvg />
            </motion.div>

            <div style={{ pointerEvents: "none" }} >
                <Image src="/img/about_bg.png" layout="fill" objectFit="cover" alt="logo" />
            </div>

        </>

    )
}

export default AnimatedAboutImage