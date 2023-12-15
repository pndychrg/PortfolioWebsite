import { projects } from "@/constants/projects"
import Image from "next/image"
import Link from "next/link"
import ScrollAnimatedParent from "./animated/ScrollAnimatedParent"

const Projects = () => {
    return (
        <section className="flex flex-col items-center justify-center py-4" id="Project">
            <h1 className="section-heading mb-4">
                Projects
            </h1>
            <div className="flex flex-col justify-center items-center">
                {projects.map((project, index) => (
                    <ScrollAnimatedParent key={index}>
                        <Link href={project.url} target="_blank" className="">
                            <div className="card-div ">
                                <div className="flex flex-row align-top items-start">
                                    <div className="flex flex-col">
                                        <h5 className="tertiary-heading">{project.name}
                                        </h5>
                                        <p className="body-text">{project.description}</p>
                                    </div>
                                    <Image alt="logo" src="/svg/github.svg" width={30} height={30} />
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimatedParent>
                ))}
            </div>
        </section >
    )
}

export default Projects