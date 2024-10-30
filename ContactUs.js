import React from "react";
import './contactus.css'; // Import your CSS file

const ContactUs = () => {
    return (
        <div className="contact-container d-flex justify-content-center align-items-center vh-100">
            <form className="row g-3" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="John Doe" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputNum" className="form-label">Number</label>
                    <input type="text" className="form-control" id="inputNum" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputZip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputState" className="form-label">Status</label>
                    <select id="inputState" className="form-select">
                        <option selected>Great!</option>
                        <option>Good :)</option>
                        <option>Sad :( </option>
                        <option>Bad >:( </option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputConcern" className="form-label">What is your concern</label>
                    <input type="text" className="form-control" id="inputConcern" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
