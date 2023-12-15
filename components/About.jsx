
const About = () => {
    return (
        <section className="py-3 mt-3">
            <div className="flex flex-col items-center justify-around">
                <h1 className="section-heading">
                    ABOUT ME
                </h1>
                <div className="flex flex-row items-center justify-center flex-wrap">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-3 my-3"
                        style={{ backgroundImage: 'url("/img/about.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                    </div>
                    <div className="w-[300px] md:w-[500px] mx-3 ">
                        <h3 className="secondary-heading">
                            A brief intro, who am I?
                        </h3>
                        <p className="text-slate-400 text-lg md:text-xl">
                            I am a full stack developer, flutter developer based in Udaipur,India
                            <br />
                            I specialize in crafting elevated, intuitive, and minimalistic designs for startups and small businesses to help them stand out in the digital landscape with a powerful impact.
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