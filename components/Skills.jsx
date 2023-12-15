import { skills } from "@/constants/skills"
import Image from "next/image"
const Skills = () => {


    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                <h1 className="section-heading">
                    Skills
                </h1>
                <div className="flex flex-row items-start justify-start flex-wrap">
                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">
                            Programming Languages
                        </h5>
                        <ul className="body-text">
                            {
                                skills.programmingLanguages.map((lang, index) => (
                                    <li key={index} className="flex flex-row">
                                        <Image src={lang.logo} height={30} width={30} alt="logo" />
                                        {lang.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">
                            Frameworks
                        </h5>
                        <ul className="body-text">
                            {skills.frameworks.frontend.map((frame, index) => (
                                <li key={index} className="flex flex-row">
                                    <Image src={frame.logo} height={30} width={30} alt="logo" />
                                    {frame.name}
                                </li>))}
                            {skills.frameworks.backend.map((frame, index) => (
                                <li key={index} className="flex flex-row">
                                    <Image src={frame.logo} height={30} width={30} alt="logo" />

                                    {frame.name}
                                </li>))}
                        </ul>
                    </div>
                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">Databases</h5>
                        <ul className="body-text">
                            {skills.database.map((db, index) => (
                                <li key={index} className="flex flex-row">
                                    <Image src={db.logo} height={30} width={30} alt="logo" />
                                    {db.name}
                                </li>))}
                        </ul>
                    </div>

                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">Technologies</h5>
                        <ul className="body-text">
                            {skills.technology.map((tech, index) => (
                                <li key={index} className="flex flex-row">
                                    <Image src={tech.logo} height={30} width={30} alt="logo" />
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