import { contact, personalDetails } from "@/constants/contact"
import Image from "next/image"
const Contact = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="section-heading">Contact</h1>
            <div className="flex flex-row">
                <div className="flex flex-col ">
                    {contact.map((cont, index) => (
                        <div key={index}>
                            <p className="body-text">
                                <a href={cont.url} target="_blank" className="flex flex-row">
                                    <Image src={cont.logo} alt="logo" height={30} width={30} />
                                    {cont.platform}
                                </a>
                            </p>
                        </div>))}
                </div>
                <div className="flex flex-col body-text">
                    <span className="flex flex-row">
                        <Image src="/svg/phonenumber.svg" alt="logo" height={30} width={30} />
                        {personalDetails.phoneNumber}
                    </span>
                    <span className="flex flex-row">
                        <Image src="/svg/email.svg" alt="logo" height={30} width={30} />
                        {personalDetails.email}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact