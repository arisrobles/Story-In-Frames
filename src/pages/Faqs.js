import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import thankYouImage from "../assets/images/logos/thank-you.png";
import "../assets/styles/Faqs.css";

const Faqs = () => {
  useEffect(() => {
    // IntersectionObserver to handle animations
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const elementsToAnimate = document.querySelectorAll(
      ".faqs-container, .faqs-title, .faqs-list, .faqs-contact, .contact-details, .thank-you-image"
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="booking" className="faqs-container">
      <h1 className="faqs-title">
        HERE'S HOW TO <span className="highlight">BOOK</span> A PACKAGE
      </h1>
      <ul className="faqs-list">
        <li className="faqs-item">
          We require a non-refundable downpayment <br /> to book a date.
        </li>
        <li className="faqs-item">
          Another 40% downpayment on the day of the event and <br />
          the remaining balance should be settled on or <br /> before the event.
        </li>
      </ul>
      <div className="faqs-contact">
        <p>For more info, please contact us at:</p>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhone /> 09292620582
          </div>
          <div className="contact-item">
            <FaInstagram />
            <a
              href="https://www.instagram.com/g.jordieeee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="contact-item">
            <FaFacebook />
            <a
              href="https://www.facebook.com/jordan.rodolfo.3726"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <footer className="faqs-footer">
        <img src={thankYouImage} alt="Thank You" className="thank-you-image" />
      </footer>
    </div>
  );
};

export default Faqs;
