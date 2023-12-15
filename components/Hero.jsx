/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
const Hero = () => {
    return (
        // TODO decrease line height in mobile devices
        <section className="lg:py-10 py-3 ">
            <div className="flex flex-row items-center justify-around ">
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
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] "
                    style={{ backgroundImage: 'url("/img/profile.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                </div>
            </div>
        </section>
    )
}

export default Hero