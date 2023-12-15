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
                    <div key={index} className="max-w-sm md:max-w-max flex flex-col  md:p-5 p-2 md:m-3 m-2 rounded overflow-hidden border hover-text-bold  hover:scale-[1.02] transition-all border-blue-100 ">
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
                            <span className="flex flex-row">
                                {/* make the logo red */}
                                <Image alt="logo" src={details.logo} width={30} height={30} />
                                {details.issuer}
                            </span>
                        </p>
                    </div>))
                }
            </div>
        </section>
    )
}

export default Education