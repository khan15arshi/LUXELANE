import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Natus quam corrupti reiciendis provident consequatur! Vel aspernatur ut
                          similique voluptatum aliquid consequatur at molestias, incidunt quos!
                           Nemo tempora repellat consequatur fugit.
                           </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                    <div className="text">
                        St. Stephen's Rd, Panchsheel Nagar, Ajmer
                        Rajasthan, 305001
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                    <div className="text">Phone: (+91)9784161937 </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                    <div className="text">Email: store@blazecart.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theater</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            BLAZECART 2024 CREATED BY AARUSHI BHARDWAJ PREMIUM E-COMMERCE
                            SOLUTIONS.
                        </div>
                        <img src={Payment} />
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
