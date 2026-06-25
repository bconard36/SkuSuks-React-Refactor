import { useState } from "react";
import RadioButton from "./RadioButton";

const Donate = () => {

    const [donation, setDonation] = useState('');

    const handleDonation = (evt) => {
        setDonation(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Donation Amount: ${donation}`);
    }

    return ( 
        <div className="donate">
            <div className="header-container">
                <h3 className="page-header">Empower the Next Generation</h3>
            </div>
            <div className="donate-hero-image-container">
                <img src="../../Images/donate2.jpg" alt="A group of kids gathered together" className="donate-hero-image" />
            </div>
            <div className="donate-statement-container">
                <p>Your donation helps us provide educational resources and opportunities for the youth in our community.</p>
                <p>We appreciate your support. Mahalo!</p>
            </div>
            <div className="donation-container">
                <fieldset className="donation-selection">
                    <legend id="donation-legend">Donation Amount</legend>
                    <RadioButton 
                        label="$10"
                        name="donationAmount"
                        value="10"
                        selectedValue={donation}
                        onChange={handleDonation}
                    />
                    <RadioButton 
                        label="$25"
                        name="donationAmount"
                        value="25"
                        selectedValue={donation}
                        onChange={handleDonation}
                    />
                    <RadioButton 
                        label="$50"
                        name="donationAmount"
                        value="50"
                        selectedValue={donation}
                        onChange={handleDonation}
                    />
                    <RadioButton 
                        label="$100"
                        name="donationAmount"
                        value="100"
                        selectedValue={donation}
                        onChange={handleDonation}
                    />
                    <RadioButton 
                        label="Other"
                        name="donationAmount"
                        value="Other"
                        selectedValue={donation}
                        onChange={handleDonation}
                    />
                </fieldset>
            </div>
            <div className="donate-button-container">
                <button className="btn-donate" onClick={handleSubmit}>
                    Donate Now
                </button>
            </div>
        </div>
     );
}
 
export default Donate;