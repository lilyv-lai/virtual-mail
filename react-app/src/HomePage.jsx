import React from 'react';
import Background from './Background';
import Logo from './Logo';
import './styles.css'
import { Link } from "react-router-dom";

function HomePage() {
  return (
      <div>
        <Background />
        <Link to="/">
            <Logo />
        </Link>
        <div className="mail">
            <Link to="/create">
            <div className="letter">
                <img id="back_envelope" src="images/back_envelope.png" />
                <img id="front_envelope" src="images/front_envelope.png" />
                <img id="lid_one" src="images/lid_one.png" />
                <img id="lid_two" src="images/lid_two.png" />
                <img id="click_to_start_writing_button" src="images/click_to_start_writing.png" />
            </div>
            </Link>
        </div>
      </div>
    );
  }

  export default HomePage