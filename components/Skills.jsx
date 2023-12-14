import { skills } from "@/constants/skills"

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
                                    <li key={index}>{lang.name}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">
                            Frameworks
                        </h5>
                        <ul className="body-text">
                            {skills.frameworks.frontend.map((frame, index) => (<li key={index}>{frame.name}</li>))}
                            {skills.frameworks.backend.map((frame, index) => (<li key={index}>{frame.name}</li>))}
                        </ul>
                    </div>
                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">Databases</h5>
                        <ul className="body-text">
                            {skills.database.map((db, index) => (<li key={index}>{db.name}</li>))}
                        </ul>
                    </div>

                    <div className="flex flex-col mx-3">
                        <h5 className="tertiary-heading">Technologies</h5>
                        <ul className="body-text">
                            {skills.technology.map((tech, index) => (<li key={index}>{tech.name}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills