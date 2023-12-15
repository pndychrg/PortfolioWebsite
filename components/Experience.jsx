import { experience } from "@/constants/experience"
import Image from "next/image"
const Experience = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="section-heading">Experience</h1>
            <div className="flex flex-col">
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h5 className="tertiary-heading">
                            {exp.position}
                            <span className="text-lg">({exp.start}-{exp.end})</span>
                        </h5>
                        <p className="body-text flex flex-row">
                            <Image alt="logo" src={exp.logo} width={40} height={40} />
                            {exp.company}
                            <br />
                        </p>
                    </div>))}
            </div>
        </section>
    )
}

export default Experience