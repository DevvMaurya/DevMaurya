import "../all_CSS/img.css";
import { useState } from "react";
import React from "react";
import image from "../assets/image.png";
import phone from "../assets/icons8-contact-58.png";
import contact from "../assets/icons8-contact-book-64.png";
import location from "../assets/icons8-location-100.png";
import downarror from "../assets/icons8-down-arrow-80.png";
import uparrow from "../assets/icons8-up-arrow-80 - .png";
import github from "../assets/icons8-github-48.png";

function Picture() {
  return (
    <>
      <img src={image} alt="app" className="img_box" />
      <span className="Name_role">
        <h2 className="name">Dev Maurya</h2>
        <span className="tag">I.T. Engineer</span>
      </span>
    </>
  );
}

function Contact() {
  return (
    <div className="contact">
      <span>
        <img width="38" height="38" src={phone} alt="book" />
        <div className="icons">
          <h3>Contact :</h3>
          <p>+91 8200270283</p>
        </div>
      </span>
      <span>
        <img width="38" height="38" src={contact} alt="address-book" />
        <div className="icons">
          <h3>Email :</h3>
          <p>devvmaurya@gmail.com</p>
        </div>
      </span>
      <span>
        <img width="38" height="38" src={location} alt="" />
        <div className="icons">
          <h3>Location :</h3>
          <p>Surat, Gujarat, India.</p>
        </div>
      </span>
    </div>
  );
}

const LeftVerticalBox = () => {
  const [show, setShow] = useState(true);
  const linkHandler = (link) => {
    window.open(link);
  }
  return (
    <div className={show ? "left_box" : "left_box left_box_hover"}>
      <Picture />
      <button
        className="moreBtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        <img
          width="20"
          height="20"
          src={show ? downarror : uparrow}
          alt="expand-arrow"
        />
      </button>
      <hr />
      <Contact />
      <div className="social">
        <img width="32" height="32" src={github} alt="github" onClick={()=>{linkHandler("https://github.com/DevvMaurya")}} />
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/fluency/48/linkedin.png"
          alt="linkedin"
          onClick={() =>{linkHandler("https://www.linkedin.com/in/dev-maurya-238405222/")}}
        />
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/dusk/64/x.png"
          alt="x"
          onClick={() =>{linkHandler("https://x.com/DevvMaurya")}}
        />
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/fluency/48/instagram-new.png"
          alt="instagram-new"
          onClick={() =>{linkHandler("https://www.instagram.com/devv_maurya/")}}
        />
      </div>
      <p>© 2024 by Dev Maurya.</p>

    </div>
  );
};

export default LeftVerticalBox;
