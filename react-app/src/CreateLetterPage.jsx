import React from 'react';
import Background from './Background';
import Logo from './Logo';
import './styles.css'
import { Link } from "react-router-dom";
import InsertForm from './InsertForm';

function CreateLetterPage() {
    return (
        <div>
          <Background />
          <Link to="/">
            <Logo />
          </Link>
          <div className="mail">
              <img id="memo_paper" src="images/memo_paper.jpg" />
              <InsertForm />
              {/* <form>
                  <textarea id="text" name="text" rows="17" cols="45" placeholder="Type your message..."></textarea>
              </form> */}
              {/* <img id="done_button" src="images/done_button.png" /> */}
            </div>
        </div>
      );
    }
  
    export default CreateLetterPage