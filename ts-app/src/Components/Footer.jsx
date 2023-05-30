import React from "react";
import "../Styles/footer.css";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillGooglePlusCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGooglePlus, FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      <div id="MainFooter">
        <div id="topFooter">
          <div>
            <div id="address">
              <div>
                <h1>USA</h1>
                <p>
                  447 Broadway,
                  <br /> 2nd Floor, New York,
                  <br /> NY, 10013
                  <br />
                  Phone No- 784542211212
                </p>
              </div>
              <div>
                <h1>IND</h1>
                <p>
                  447 Broadway,
                  <br /> 2nd Floor, New York,
                  <br /> NY, 10013
                  <br />
                  Phone No- 784542211212
                </p>
              </div>
              <div>
                <h1>UAE</h1>
                <p>
                  447 Broadway,
                  <br /> 2nd Floor, New York,
                  <br /> NY, 10013
                  <br />
                  Phone No- 784542211212
                </p>
              </div>
            </div>
            <div id="contacts">
              <div>
                <p>Help & Support</p>
                <div>
                  <AiFillGooglePlusCircle color="red" size="40px" />
                  <p>sales@Transportsimple.com</p>
                </div>
              </div>
              <div>
                <p>General & Sales Enquiries</p>
                <div>
                  <FaWhatsappSquare size="40px" color="green" />
                  <p>+91-6372801404</p>
                </div>
              </div>
              <div>
                <p>Join our team</p>
                <div>
                  <AiFillGooglePlusCircle  color="red" size="40px"  />
                  <p>careers@Transportsimple.com</p>
                </div>
              </div>
            </div>
          </div>
          <div id="formWrapper">
            <form action="" id="form">
              <label htmlFor="message">Email</label>
              <input type="text" placeholder="Enter Your Email" />
              <label htmlFor="message">Message</label>
              <textarea type="text" placeholder="Type here" id="message" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div id="bottomFooter">
          <a>Home</a>
          <a>Feature</a>
          <a>About us</a>
          <a>Pricing</a>
          <a>Contact us</a>
          <div>
            <BsFacebook color="" size="35px" />
            <AiFillLinkedin size="35px" />
            <BsYoutube size="40px" color="" />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
