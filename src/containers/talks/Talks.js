import React, {useContext} from "react";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p className={ isDark ? "dark-mode talk-header-subtitle" : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <form method='POST' action='https://getform.io/f/0d409ded-ca4b-49fa-afe0-019c825c2373'>
          <label>Name<input type='text' name='name' /></label><br/>
          <label>Email<input type='email' name='email'/></label><br/>
          <label>Subject<input type='text' name='subject' /></label><br/>
          <label>Message<textarea name='message' rows='5' /><br/>
          
          </label><button type='submit'>Send</button></form>
          {/* <form action="https://getform.io/f/0d409ded-ca4b-49fa-afe0-019c825c2373" method="POST">        

          <input type="text" name="name">
          <input type="email" name="email">
            <input type="text" name="message">
           <button type="submit">Send</button>

         </form> */}
        </div>
      </div>
    </Fade>
  );
}
