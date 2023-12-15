/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, stagger } from 'framer-motion';
import AnimatedHeroImage from "./animated/AnimatedHeroImage"

const divVariants = {
    hidden: {
        opacity: 0,
        scale: 3,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


const Hero = () => {
    return (
        // TODO decrease line height in mobile devices
        <section className="lg:py-10 py-3 mt-3 lg:h-[850px] flex flex-row items-center justify-around">
            <motion.div
                variants={divVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-row items-center justify-around w-full">
                <div className="font-bold pe-2">
                    <h1 className="font-poppins text-5xl md:text-7xl lg:text-9xl  font-extrabold md:mb-5 " >
                        <span>Hello, I'm </span>
                        <br />
                        <span>Chirag Pandey</span>
                    </h1>
                    <h5 className="font-poppins md:text-7xl text-5xl text-slate-500 w-auto">
                        <span>Full Stack Developer</span>
                    </h5>
                    <p className='text-slate-400 text-3xl'>It's been a pleasure</p>
                </div>
                <AnimatedHeroImage />
            </motion.div>
        </section>
    )
}

export default Hero