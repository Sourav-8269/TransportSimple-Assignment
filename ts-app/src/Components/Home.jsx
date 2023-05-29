import React from "react";
import "../Styles/home.css"
const Home = () => {
  return (
    <div>
      <div id="section_1">
        <div>
          <h2>Content fleet management <br/>Content fleet</h2>
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
    </div>
  );
};

export default Home;
