import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Styles.css';
import {
    FaRegArrowAltCircleRight,
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';

export default class Footer extends Component {

  constructor(){

    super();
     this.companyLinks = [
        { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
        { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: 'contact' },
        { label: 'Reservation', icon: FaRegArrowAltCircleRight, Link: 'contact' },
        { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, Link: '' },
        { label: 'Terms & Condition', icon: FaRegArrowAltCircleRight, Link: '' },
      ];
    
      this.contactInfo = [
        { icon: 'fa-map-marker-alt', text: '123 Street, New York, USA' },
        { icon: 'fa-phone-alt', text: '+012 345 67890' },
        { icon: 'fa-envelope', text: 'info@example.com' },
      ];
    
      this.socialLinks = [
        { icon: FaTwitter, scale: 1.3 },
        { icon: FaFacebookF, scale: 1.3 },
        { icon: FaYoutube, size: 40, scale: 1.3 },
        { icon: FaLinkedin, scale: 1.3 },
      ];
    
      this.categories = [
        { name: 'test djfkdg' },
        { name: 'uierueryru' },
        { name: 'teyernfj riru' },
        { name: 'hkjghkhfg' },
      ];
  }
       
    render() {
        return (
            <React.Fragment>
      <div
        className="container-fluid footer-bg text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start fw-normal mb-4">
                Company
              </h4>
              {this.companyLinks.map((link, index) => (
                <Link
                  key={index}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: 'me-2' })}
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="col-lg-3 col-md-6 text-md-start">
              <h4 className="section-title ff-secondary text-start  fw-normal mb-4">
                Contact
              </h4>
              {this.contactInfo.map((info, index) => (
                <p key={index} className="mb-2">
                  <i className={`fa ${info.icon} me-3`} />
                  {info.text}
                </p>
              ))}
              <div className="d-flex pt-2">
                {this.socialLinks.map((social, index) => (
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
            <div className="col-lg-3 col-md-6 text-md-start">
              <h4 className="section-title ff-secondary text-start fw-normal mb-4">
                Category
              </h4>
              {this.categories.map((cat, index) => (
                <React.Fragment key={index}>
                  <h5 className="text-light fw-normal">{cat.name}</h5>
                  {/* <p>{hours.time}</p> */}
                </React.Fragment>
              ))}
            </div>
            <div className="col-lg-3 col-md-6 text-md-start">
              <h4 className="section-title ff-secondary text-start fw-normal mb-4">
                Send Feedback
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your feedback"
                />
                <button
                  type="button"
                  className="send-btn btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{' '}
                <Link className="border-bottom" href="#">
                  Your Site Name
                </Link>
                , All Right Reserved.
                <br />
                <br />
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="">Home</Link>
                  <Link href="">Cookies</Link>
                  <Link href="">Help</Link>
                  <Link href="">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
        )
    }
}
