import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { emailKeys } from '../../../utils/key';
import AlertNotification from "./alert";

const ContactForm = () => {
    const form = useRef();
    const [text, setText] = useState('');
    const [alert, setAlert] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(emailKeys.SERVICE_ID, emailKeys.TEMPLATE_ID, form.current, emailKeys.PUBLIC_KEY)
        .then(() => {
            setText('E-mail successfully sent');
            setAlert(true);
        }, () => {
            setText('Something gone wrong.\nPlease contact with me via email:\ndmitriy.kulikovskiy23@gmail.com');
            setAlert(true);
        });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form__top">
                    <input placeholder="Name" name="name" required/>
                    <input placeholder="Your Email" name="email" required/>
                </div>
                <input className="full-width" placeholder="Subject" name="subject" required/>
                <textarea className="full-width" placeholder="Message" name="message" required/>
                <br/>
                <button type="submit" className="contact__form__button">
                    Send Message
                </button>
            </form>

            <AlertNotification isOpen={alert} text={text} setAlert={setAlert}/>
        </>
    )
}

export default ContactForm;