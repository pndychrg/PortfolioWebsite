import { certificates, education } from "@/constants/education"

const Education = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="section-heading">
                Education
            </h1>
            <div className="flex flex-col items-start justify-start flex-wrap">
                {education.map((details, index) => (
                    <div key={index} className="flex flex-col">
                        <h5 className="tertiary-heading">
                            {details.degree}
                            <span className="text-lg">
                                ({details.startYear} - {details.endYear})
                            </span>
                        </h5>
                        <p className="body-text">
                            {details.institute}
                            <br />
                            {details.score}
                            <br />
                            <span className="text-lg">
                                {details?.field}
                            </span>
                            <br />
                        </p>
                    </div>))}
                <hr />
                <h5 className="tertiary-heading">
                    Certificates
                </h5>
                {
                    certificates.map((details, index) => (<div key={index}>
                        <p className="body-text">
                            {details.name}
                            <span>({details.issueDate})</span>
                            <br />
                            {details.issuer}
                        </p>
                    </div>))
                }
            </div>
        </section>
    )
}

export default Education