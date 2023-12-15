/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import AnimatedHeroImage from "./animated/AnimatedHeroImage"


const Hero = () => {
    return (
        // TODO decrease line height in mobile devices
        <section className="lg:py-10 py-3 md:h-[800px] flex flex-row items-center justify-around">
            <div className="flex flex-row items-center justify-around w-full">
                <div className="font-bold pe-3">
                    <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl  font-extrabold md:mb-5 " >
                        <span>Hello, I'm </span>
                        <br />
                        <span>Chirag Pandey</span>
                    </h1>
                    <h5 className="font-poppins  md:text-6xl  text-5xl text-slate-500">
                        <span>Full Stack Developer</span>
                    </h5>
                    <p className='text-slate-400'>It's been a pleasure</p>
                </div>
                <AnimatedHeroImage />
            </div>
        </section>
    )
}

export default Hero