import AnimatedAboutImage from "./animated/AnimatedAboutImage"
const About = () => {
    return (
        <section className="py-3 mt-3">
            <div className="flex flex-col items-center justify-around">
                <h1 className="section-heading">
                    ABOUT ME
                </h1>
                <div className="flex flex-row items-center justify-center flex-wrap">
                    <div className="rounded-full w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] mx-3 my-3 relative"
                    >
                        <AnimatedAboutImage />
                    </div>
                    <div className="w-[350px] md:w-[700px] mx-3 ">
                        <h3 className="secondary-heading">
                            A brief intro, who am I?
                        </h3>
                        <p className="text-slate-400 text-lg md:text-xl">
                            I am a full stack and flutter developer based in Udaipur, India
                            <br />
                            I specialize in crafting elevated, intuitive, and minimalistic designs for web and android applications.
                            <br />
                            When I am not developing or designing, I enjoy playing Chess, reading mangas and novels
                        </p>
                    </div>
                </div>
                {/* TODO add contact details */}
            </div>
        </section>
    )
}

export default About