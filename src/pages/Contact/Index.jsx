// src/ContactPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Import your custom CSS
import { Link } from 'react-router-dom';
import {
    FaRegArrowAltCircleRight,
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaMarker,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,

} from 'react-icons/fa';
import TopNav from '../../components/Common/TopNav/Index';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server or API)
        console.log(formData);
        alert('Form submitted successfully!');
        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
    };
    const contactInfo = [
        { icon: FaMapMarkerAlt,scale: 1.3, text: '123 Street, New York, USA' },
        { icon: FaPhoneAlt,scale: 1.3, text: '+012 345 67890' },
        { icon: FaEnvelope, size: 40, scale: 1.3 ,text: 'info@example.com' },
    ];

    const socialLinks = [
        { icon: FaTwitter, scale: 1.3 },
        { icon: FaFacebookF, scale: 1.3 },
        { icon: FaYoutube, size: 40, scale: 1.3 },
        { icon: FaLinkedin, scale: 1.3 },
    ];
    return (
        <>
            <div className='top-nav'>
                <TopNav />
            </div>
            <div className="contact-wrap mt-5 contact-margin">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-lg-start m-auto">
                        <h2>Contact US</h2>
                        <p>We are here to help and answer any questions you might have. We look forward to hearing from you!</p>
                        <div className="col-lg-6 col-md-6 text-md-start">
                            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                                Contact
                            </h4>
                            {contactInfo.map((info, index) => (
                                <p key={index} className="mb-2 d-flex ">
                                   <Link
                                        key={index}
                                        className="btn btn-outline-light btn-social"
                                        href=""
                                    >
                                        {React.createElement(info.icon, {
                                            className: 'display-1',
                                            style: { scale: info.scale, size: info.size },
                                        })}
                                    </Link>
                                    {info.text}
                                </p>
                            ))}
                            <div className="d-flex pt-2">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        className="btn btn-outline-light btn-social"
                                        href=""
                                    >
                                        {React.createElement(social.icon, {
                                            className: 'display-1',
                                            style: { scale: social.scale, size: social.size },
                                        })}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0">
                            {/* <div className="card-header bg-primary text-white text-center py-4">
                                <h3>Contact Us</h3>
                            </div> */}
                            <div className="card-body p-4 text-lg-start">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <small className="text-muted">We'll get back to you as soon as possible.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    );
};

export default Contact;
