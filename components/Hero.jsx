/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
const Hero = () => {
    return (
        <div className="flex flex-row items-center justify-around pt-10">
            <div className="font-bold">
                <h1 className="font-poppins text-8xl pb-5" >
                    <span>Hello, I'm </span>
                    <br />
                    <span>Chirag Pandey</span>
                </h1>
                <h5 className="font-poppins text-5xl text-slate-500">
                    <span>Full Stack Developer</span>
                </h5>
                <p className='text-slate-400'>It's been a pleasure</p>
            </div>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                style={{ backgroundImage: 'url("/profile.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
        </div>
    )
}

export default Hero