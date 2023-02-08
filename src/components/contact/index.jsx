import { IoShareSocialOutline } from "react-icons/io5";
import { FaLocationArrow, FaTelegram, FaLinkedinIn, FaViber, } from "react-icons/fa";
import Divider from "../../utilities/divider";
import InfoItem from "./components/infoItem";
import ContactForm from "./components/contactForm";

const Contact = () => {
    return (
        <div className="contact">
            <Divider text="Contact"/>
            <div className="contact__title">Contact me</div>

            <div className="contact__container-items">
                <InfoItem 
                    title="My Address"
                    description="Ukraine, Kiev"
                    icon={<FaLocationArrow color="#18D26E" size={20}/>}
                />
                <InfoItem 
                    title="Social Profiles"
                    icon={<IoShareSocialOutline color="#18D26E" size={25}/>}
                    listIcons={[
                        <FaTelegram size={18}/>,
                        <FaLinkedinIn size={18}/>,
                        <FaViber size={18}/>
                    ]}
                />
                <InfoItem 
                    title="Email Me"
                    description="dmitriy.kulikovskiy23@gmail.com"
                    icon={<FaLocationArrow color="#18D26E" size={20}/>}
                />
                <InfoItem 
                    title="Write Me in Social"
                    description="+380987344987"
                    icon={<FaLocationArrow color="#18D26E" size={20}/>}
                />
            </div>

            <ContactForm />
        </div>
    )
}   

export default Contact;