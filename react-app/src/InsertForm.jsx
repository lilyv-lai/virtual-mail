import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import supabase from "./supabase";

function InsertForm() {
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const addMessage = async() => {
    const newMessageData = {
      message: message
    }

    const {data, error} = await supabase.from("letters").insert([newMessageData]).select("id").single();

    if (error) {
      console.log("Error adding todo: ", error);
    } else {
      console.log("Message added with ID: ", data.id);
      setMessage("");
      navigate(`/display/${data.id}`);
    }
  };

  return(
    <div>
      <textarea id="text" name="text" rows="17" cols="45" type="text" placeholder="Type your message..." onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={addMessage}>
        <img id="done_button" src="images/done_button.png" />
      </button>
    </div>
  );
}

export default InsertForm;