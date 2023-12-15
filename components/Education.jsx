import { certificates, education } from "@/constants/education"
import Image from "next/image"
const Education = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="section-heading">
                Education
            </h1>
            <div className="flex flex-col items-center justify-center flex-wrap">
                {education.map((details, index) => (
                    <div key={index} className="card-div">
                        <div className="flex flex-row flex-wrap justify-center">
                            {details?.logo &&
                                <div className="md:mx-2 md:h-40 md:w-40 h-20 w-20 relative ">
                                    <Image alt="logo" src={details?.logo} layout="fill" objectFit="cover" />
                                </div>
                            }
                            <div className="flex flex-col ">
                                <span className="tertiary-heading">
                                    {details.degree}
                                </span>
                                <br />
                                <p className="body-text">
                                    {details.institute}
                                    <br />
                                    {details.score}
                                    <br />
                                    {details?.field}

                                </p>
                            </div>
                            <div className="text-lg float-right ms-3">
                                {details.startYear} - {details.endYear}
                            </div>
                        </div>
                    </div>))}

                <div className="flex flex-col items-center justify-center my-4">
                    <h5 className="secondary-heading">
                        Certificates
                    </h5>
                    {
                        certificates.map((details, index) => (
                            <div key={index} className="card-div">
                                <p className="body-text">
                                    {details.name}
                                    <span>({details.issueDate})</span>
                                    <br />
                                    <span className="flex flex-row">
                                        {`By ${details.issuer}`}
                                    </span>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Education