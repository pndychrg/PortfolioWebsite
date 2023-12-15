import { projects } from "@/constants/projects"

const Projects = () => {
    return (
        <section className="flex flex-col items-center justify-center" id="Project">
            <h1 className="section-heading">
                Projects
            </h1>
            <div className="flex flex-col ">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h5 className="tertiary-heading">{project.name}
                        </h5>
                        <p className="body-text">{project.description}</p>
                    </div>))}
            </div>
        </section>
    )
}

export default Projects