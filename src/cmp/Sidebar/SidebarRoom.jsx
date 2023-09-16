import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@mui/material";
import {AddComment} from '@mui/icons-material';
import { db, collection, addDoc, orderBy, query, onSnapshot } from "../../firebase";
import { Link } from "react-router-dom";

function SidebarRoom({id,roomName,addNewChat}) {

    const [avatar,setAvatar] = useState("");
    const [lastMessage,setLastMessage] = useState([]);

    useEffect(()=>{
       setAvatar(Math.floor(Math.random() * 5000));

        if(id){
            try{
                const queryLastMessage = query(collection(db, "rooms", id, "messages"), orderBy("timestamp","desc"));
                onSnapshot(queryLastMessage,(snapshot)=>{
                     setLastMessage(snapshot.docs.map(doc=>doc.data()));
                });
               }
               catch(error){
                console.error(error);
               }
        }
       
    },[id]);

    const addRoom = async ()=>{
        const room = prompt("Enter your room name.");
        if(room)
        {
           try{
                await addDoc(collection(db, "rooms"),{
                name : room,
                timestamp : new Date()
            });
           }
           catch(error){
                console.error(error);
           }
        }
    }

  return (
    <>
        {!addNewChat ? (<Link to={`/room/${id}`} style={{color:"black",textDecoration:"none"}}>
            <div className='sidebar-room'>
            <IconButton>
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${avatar}.svg`} />
            </IconButton>
            <div className='sidebar-room-info'>
                <h4>{roomName}</h4>
                <span>
                    {
                        lastMessage && lastMessage[0]?.message
                    }
                </span>
            </div>
        </div>
        </Link>) : (<div className='add-new-chat'>
                <div className='add-chat' onClick={addRoom}>
                    <h4>ADD NEW CHAT</h4>
                    <IconButton>
                        <AddComment />
                    </IconButton>
                </div>
            </div>)}
    </>
  )
}

export default SidebarRoom;