import React from "react";
import photo from "../images/instagram.png";
import photo1 from "../images/twitter.png";
import photo2 from "../images/youtube.png";
import "./contact.css";

const Contact = () => {
  return (
    <>
    <h1>if you want to contact us then follow this link 👀👍</h1>

      <div className="contact5">

       <div className="Sos5">
       <div className="sos1">
          <a href="https://www.youtube.come"><marquee behavior="" scrollamount="15" direction=""><h3>Our Youtube Channel :-</h3></marquee> <br /> <br />
            <img src={photo2} width="90%" height="250px"></img>
          </a>
        </div>

        <div className="sos2">
          <a href="https://www.instagram.come"><marquee behavior="" scrollamount="15" direction=""><h3>Our Youtube Channel :-</h3></marquee><br /> <br />
            <img src={photo} width="90%" height="250px"></img>
          </a>
        </div>

        <div className="sos3">
          <a href="https://www.twitter.come"><marquee behavior="" scrollamount="15" direction=""><h3>Our twitter id :-</h3></marquee><br /> <br />
            <img src={photo1} width="90%" height="250px"></img>
          </a>
        </div>

        <div className="sos4">
          <a href="https://www.facebook.come"><marquee behavior="" scrollamount="15" direction=""><h3>Our facebook id :-</h3></marquee><br /> <br />
            <img
              src={process.env.PUBLIC_URL + "/images/facebook.png"}
              width="90%"
              height="250px"
            ></img>
          </a>
        </div>

       </div>
        
      </div>
    </>
  );
};

export default Contact;
