import { skills } from "@/constants/skills"
import Image from "next/image"
const Skills = () => {


    return (
        <section className="my-3">
            <div className="flex flex-col items-center justify-center ">
                <h1 className="section-heading mb-4">
                    Skills
                </h1>
                <div className="flex flex-row  justify-around flex-wrap">
                    <div className="flex flex-col m-3">
                        <h5 className="tertiary-heading">
                            Programming Languages
                        </h5>
                        <ul className="body-text flex flex-col  ">
                            {
                                skills.programmingLanguages.map((lang, index) => (
                                    <li key={index} className="flex flex-row hover-text-bold">
                                        <Image src={lang.logo} height={30} width={30} alt="logo" className="me-2" />
                                        {lang.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="flex flex-col m-3">
                        <h5 className="tertiary-heading">
                            Frameworks
                        </h5>
                        <ul className="body-text ">
                            {skills.frameworks.frontend.map((frame, index) => (
                                <li key={index} className="flex flex-row hover-text-bold">
                                    <Image src={frame.logo} height={30} width={30} alt="logo" className="me-2" />

                                    {frame.name}

                                </li>))}
                            {skills.frameworks.backend.map((frame, index) => (
                                <li key={index} className="flex flex-row hover-text-bold">
                                    <Image src={frame.logo} height={30} width={30} alt="logo" className="me-2" />

                                    {frame.name}

                                </li>))}
                        </ul>
                    </div>
                    <div className="flex flex-col m-3">
                        <h5 className="tertiary-heading">Databases</h5>
                        <ul className="body-text">
                            {skills.database.map((db, index) => (
                                <li key={index} className="flex flex-row hover-text-bold" >
                                    <Image src={db.logo} height={30} width={30} alt="logo" className="me-2" />

                                    {db.name}


                                </li>))}
                        </ul>
                    </div>

                    <div className="flex flex-col m-3">
                        <h5 className="tertiary-heading">Technologies</h5>
                        <ul className="body-text">
                            {skills.technology.map((tech, index) => (
                                <li key={index} className="flex flex-row hover-text-bold">
                                    <Image src={tech.logo} height={30} width={30} alt="logo" className="me-2" />

                                    {tech.name}

                                </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills