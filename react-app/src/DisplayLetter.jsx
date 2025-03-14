import React from 'react';
import Background from './Background';
import './styles.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import supabase from './supabase';

function DisplayLetter() {
    const { id } = useParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchMessage();
    }, [id]);

    const fetchMessage = async () => {
        const { data, error } = await supabase
            .from("letters")
            .select("message")
            .eq("id", id)
            .single();

        if (error) {
            console.log("Error fetching message: ", error);
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div>
             <Background />
             <Link to="/">
                <img 
                src="/images/FromMeToYou.png" 
                style={{ height: "200px", width: "auto", position: "relative" }} 
                className="center" 
                />
             </Link>
             <div className="mail">
               <img id="memo_paper" src="/images/memo_paper.jpg" />
               <p id="text">{message}</p>
             </div>
        </div>
    );
}

export default DisplayLetter;