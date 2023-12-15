import { experience } from "@/constants/experience"
import Image from "next/image"
const Experience = () => {
    return (
        <section className="flex flex-col justify-center items-center py-4" >
            <h1 className="section-heading">
                Experience
            </h1>
            <div className=" flex flex-col flex-wrap">
                {experience.map((exp, index) => (
                    <div className="card-div curosr-default" key={index}>
                        <div className="flex flex-row flex-wrap">
                            <div className="flex flex-col me-4">
                                <span className="tertiary-heading">
                                    {exp.position}
                                </span>
                                <span className="body-text">
                                    {exp.company}
                                </span>
                            </div>
                            <div className="float-right">
                                {`${exp.start} - ${exp.end}`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience