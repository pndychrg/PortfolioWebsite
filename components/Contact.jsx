import { contact, personalDetails } from "@/constants/contact"

const Contact = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="section-heading">Contact</h1>
            <div className="flex flex-row">
                <div className="flex flex-col ">
                    {contact.map((cont, index) => (
                        <div key={index}>
                            <p className="body-text">
                                <a href={cont.url} target="_blank">{cont.platform}</a>
                            </p>
                        </div>))}
                </div>
                <div className="flex flex-col body-text">
                    <p >
                        {personalDetails.phoneNumber}
                    </p>
                    {personalDetails.email}
                </div>
            </div>
        </section>
    )
}

export default Contact