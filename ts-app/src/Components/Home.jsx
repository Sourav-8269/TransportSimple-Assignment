import React from "react";
import "../Styles/home.css"
import mechanicalengineer from "../Images/mechanical-engineer.jpg";
const Home = () => {
  return (
    <div>
      <div id="section_1">
        <div>
          <h1>Content fleet management <br/>Content fleet</h1>
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
      </div>
      <section id="section_2">
        <div id="section_2_heading">
          <div>
            <p>
              KNOW ABOUT <span style={{color:"#1da1f2",fontWeight:"600"}} >TRANSPORTSIMPLE</span>
            </p>
            <h1 style={{marginTop:"-15px"}} >At our company, we specialize in providing comprehensive</h1>
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
            <img id="enginner_img" src={mechanicalengineer} alt="Engineer" srcset="" />
        </div>
        </section>
    </div>
  );
};

export default Home;
