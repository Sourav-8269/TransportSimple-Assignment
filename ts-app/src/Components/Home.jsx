import React from "react";
import "../Styles/home.css";
import mechanicalengineer from "../Images/mechanical-engineer.jpg";
import { FiTruck } from "react-icons/fi";
import upekkha from "../Images/upekkha.png";
import Developer from "../Images/Developer.png"
import Experts from "../Images/Experts.png"
import support from "../Images/support.png"
import trustworthy from "../Images/trustworthy.png"
import { FaHandshake } from "react-icons/fa";
import FirstBanner2 from "../Images/FirstBanner.png";
const Home = () => {
  return (
    <div>
      <div id="section_1">
        <div>
          <h1>
            Content fleet management <br />
            Content fleet
          </h1>
          <p>
            TransportSimple has been built with a vision to revolutionise the
            logistics industry globally. It is the perfect one-stop fleet
            management solution suitable for all fleet sizes.
          </p>
          <div>
            <button id="primary_button" style={{ marginRight: "25px" }}>
              Get Started
            </button>
            <button id="secondary_button">Contact us</button>
          </div>
        </div>
        <div id="firstImage">
          <img src={FirstBanner2} alt="" srcset="" />
        </div>
        <div id="blob" ></div>
      </div>
      <div id="section_2">
        <div id="section_2_heading">
          <div>
            <p>
              KNOW ABOUT{" "}
              <span style={{ color: "#1da1f2", fontWeight: "600" }}>
                TRANSPORTSIMPLE
              </span>
            </p>
            <h1 style={{ marginTop: "-15px" }}>
              At our company, we specialize in providing comprehensive
            </h1>
          </div>
          <p>
            TransportSimple has been built with a vision to revolutionise the
            logistics industry globally. It is the perfect one-stop fleet
            management solution suitable for all fleet sizes. TransportSimple
            has been built with a vision to revolutionise the logistics industry
            globally. It is the perfect one-stop fleet management solution
            suitable for all fleet sizes.
          </p>
        </div>
        <div id="engineer_div">
          <img id="engineer_img" src={mechanicalengineer} alt="Engineer" />
          <div id="vehicle_catalog">
            {/* <FiTruck size="20" /> */}
            <div>
              <FiTruck color="#4AA0FC" size={"20px"} />
              <p>135400</p>
              <p>vehicles</p>
            </div>
            <div>
              <FiTruck color="#4AA0FC" size={"20px"} />
              <p>135400</p>
              <p>vehicles</p>
            </div>
            <div>
              <FiTruck color="#4AA0FC" size={"20px"} />
              <p>135400</p>
              <p>vehicles</p>
            </div>
            <div>
              <FiTruck color="#4AA0FC" size={"20px"} />
              <p>135400</p>
              <p>vehicles</p>
            </div>
          </div>
        </div>
      </div>
      <div id="bannerSection">
        <h1 id="banner_heading">There are 3 steps to get <br/>Worlds most visible platform</h1>
        <div id="banners">
          <div>
            <div id="orangeIcon">
              <h1>01</h1>
            </div>
            <h3>We will your Tech partner</h3>
              <p>
                We have 20+ years of industry experience and understand the
                challenges faced by you. Let us manage technology while you expand
                your business!
              </p>
              <div id="bannerIcon">
                <FaHandshake color="#ffa200" size="50px" />
              </div>
          </div>
          <div>
            <div id="orangeIcon">
              <h1>02</h1>
            </div>
            <h3>We will your Tech partner</h3>
              <p>
                We have 20+ years of industry experience and understand the
                challenges faced by you. Let us manage technology while you expand
                your business!
              </p>
              <div id="bannerIcon">
                <FaHandshake color="#ffa200" size="50px" />
              </div>
          </div>
          <div>
            <div id="orangeIcon">
              <h1>03</h1>
            </div>
            <h3>We will your Tech partner</h3>
              <p>
                We have 20+ years of industry experience and understand the
                challenges faced by you. Let us manage technology while you expand
                your business!
              </p>
              <div id="bannerIcon">
                <FaHandshake color="#ffa200" size="50px" />
              </div>
          </div>
        </div>
      </div>
      <div id="sectionDemo">
        <div id="demoMain">
            <h2>Be more efficient and profitable with TransportSimple</h2>
            <p>
              We offer solutions to streamline operations and accounts, resulting
              in enhanced productivity increased profits, scalability and ease in
              daily operations. We've been building a solution to revolutionise
              the logistics industry globally.
            </p>
            <button id="demo_button">Book A Demo</button>
          </div>
      </div>
      <div id="section_3">
        <h2 id="section_6_heading">
          BENEFITS OF WORKING WITH <span>US</span>
        </h2>
        <div id="investors_div">
           <div>
            <img src={Experts} alt="upekkha" />
            <p>Industry Experts</p>
          </div>
          <div>
            <img src={Developer} alt="upekkha" />
            <p>Top notch Developers Experts</p>
          </div>
           <div>
            <img src={support} alt="upekkha" />
            <p>Full customer cupport team</p>
          </div>
           <div>
            <img src={trustworthy} alt="upekkha" />
            <p>Trustworthy and reliable</p>
          </div>
        </div>
      </div>
      <div id="section_4">
        <h2 id="section_6_heading">
          OUR <span>INVESTOR</span>
        </h2>
        <div id="investors_div">
          <img src={upekkha} alt="upekkha" />
          <img src={upekkha} alt="upekkha" />
          <img src={upekkha} alt="upekkha" />
          <img src={upekkha} alt="upekkha" />
        </div>
      </div>
      <div id="section_5">
        <h2 id="section_6_heading">
          OUR <span>MENTOR</span>
        </h2>
        <div id="mentors_div">
          <img
            src={
              "https://www.f6s.com/content-resource/profiles/1510727_original.jpg"
            }
            alt="start-up"
          />
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png"
            }
            alt="IIM-Bangalore"
          />
          <img
            src={
              "https://www.iimb.ac.in/sites/default/files/2020-07/NSRCEL%20Main%20logo.jpg"
            }
            alt="NSRCEL"
          />
        </div>
      </div>
      <div id="section_6">
        <h2 id="section_6_heading">
          ACHIEVEMENTS & <span>NEWS</span>
        </h2>
        <div id="grid-images">
          <div>Div 1</div>
          <div>Div 2</div>
          <div>Div 3</div>
          <div>Div 4</div>
          <div>Div 5</div>
          <div>Div 6</div>
          <div>Div 7</div>
          <div>Div 8</div>
        </div>
      </div>
      <div id="section_3"></div>
    </div>
  );
};

export default Home;
