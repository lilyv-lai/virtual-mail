import { useState } from 'react';
import supabase from "./supabase";

function InsertForm() {
  const [message, setMessage] = useState('')
  
  const addMessage = async() => {
    const newMessageData = {
      message: message
    }
    const {data, error} = await supabase.from("letters").insert([newMessageData]);

    if (error) {
      console.log("Error adding todo: ", error);
    } else {
      setMessage("");
    }
  };

  return(
    <div>
      <textarea value={message} id="text" name="text" rows="17" cols="45" type="text" placeholder="Type your message..." onChange={(e) => setMessage(e.target.value)}/>
      <button id="done_button" onClick={addMessage}> Done</button>
      {/* <img onClick={addMessage} id="done_button" src="images/done_button.png" /> */}
    </div>
  );
}

export default InsertForm


// import React, { useState } from 'react';
// import { supabase } from './supabase';

// const InsertForm = () => {
//   const [message, setMessage] = useState('');

//   console.log('Rendering InsertForm'); // Check if the component is rendering

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!message.trim()) {
//       console.log('Message is empty!');
//       return;
//     }

//     console.log('Submitting message:', message);  // Check if message is being submitted

//     // Insert into Supabase
//     const { data, error } = await supabase
//       .from('letters')
//       .insert([{ message }]);

//     if (error) {
//       console.log('Error inserting data:', error);
//     } else {
//       console.log('Data inserted successfully:', data);
//       setMessage(''); // Clear message after successful submission
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default InsertForm;





// import React from 'react';

// const InsertForm = () => {
//   return (
//     <div>
//       <h1>InsertForm Loaded</h1>
//     </div>
//   );
// };

// export default InsertForm;