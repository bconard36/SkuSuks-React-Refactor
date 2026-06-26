import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const contactForm = { name, phone, email, message };

        console.log(contactForm);
    }

    return ( 
        <div className="contact-container">
            <div className="header-container">
                <h3 className="page-header">CONTACT US</h3>
            </div>
            <div className="contact-form-container">
                <form action="" className="contact-form" onSubmit={handleSubmit}>
                    <fieldset id="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                id="name"
                                placeholder="First and Last Name"
                                value={name}
                                required
                                onChange={(evt) => setName(evt.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input 
                                type="tel"
                                id="phone"
                                placeholder="(555)555-5555"
                                value={phone}
                                required
                                onChange={(evt) => setPhone(evt.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="JohnDoe@gmail.com"
                                value={email}
                                required
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="5" 
                                cols="30"
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(evt) => setMessage(evt.target.value)}
                            ></textarea>
                        </div>
                        <button id="submit" type="submit">Submit</button>
                        <img src="../../Images/alternate_skusucks_logo.png" alt="A SkuSuks alternate logo" id="form-graphic"></img>
                    </fieldset>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;