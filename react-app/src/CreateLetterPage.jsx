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
            </div>
        </div>
      );
    }
  
    export default CreateLetterPage