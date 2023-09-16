import { AttachFile, EmojiEmotions, MicNoneOutlined, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./ChatBox.css";
import {
    useParams
} from "react-router-dom";
import { db, collection, addDoc, doc, onSnapshot, query, orderBy } from "../../firebase";

function ChatBox() {

    const {roomId} = useParams();
    const [input,setInput] = useState("");
    const [roomName, setRoomName] = useState("");
    const [messages,setMessages] = useState([]);
    const [lastSeen,setLastSeen] = useState("");

    useEffect(()=>{
        if(roomId)
        {
            onSnapshot(doc(db, "rooms", roomId),(snapshot)=>{
                setRoomName(snapshot.data().name);
            })

            const queryMessages = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp","asc"));
            onSnapshot(queryMessages,(snapshot)=>{
                const snap = snapshot.docs.map((doc)=>({
                    id : doc.id,
                    data : doc.data()
                }));
                setMessages(snap);
            })


            const queryTime = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "desc"));
            onSnapshot(queryTime,(snapshot)=>{
                const snapTime = snapshot.docs.map(doc=>doc.data());
                setLastSeen(snapTime);
            });
        }
    },[roomId]);




    const sendMessage = async (e)=>{
        e.preventDefault();
        if(input.trim() && roomId)
        {
            try{
                await addDoc(collection(db, "rooms", roomId, "messages"),{
                    name : "Adarsh Kumar",
                    message : input,
                    timestamp : new Date()
                });
                setInput("");
            }
            catch(error){
                console.error(error);
            }
        }
        
    }


    const MessageBox = ({data})=>{
        return (
            <>
                <div className='chatbox-message-box chat-sender'>
                    <h4>{data.name}</h4>
                    <div className='chatbox-message'>
                        <span>{data.message}</span>
                        <span>
                            {
                                lastSeen && new Date(data.timestamp?.seconds*1000).toLocaleTimeString()
                            }
                        </span>
                    </div>  
                </div> 
            </>
        );
    }

  return (
    <div className='chatbox'>
        <div className='chatbox-header'>
            <div className='chatbox-header-left'>
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className='chatbox-header-left-info'>
                    <h4>{roomName}</h4>
                    <span>
                        {
                            new Date(lastSeen[0]?.timestamp?.seconds*1000).toLocaleTimeString()
                        }
                    </span>
                </div>
            </div>
            <div className='chatbox-header-right'>
                <IconButton>
                    <Search />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className='chatbox-body'>
            {
                messages.map(({id,data})=>{
                    return <MessageBox key={id} data={data} />
                })
            }
           
              
        </div>

        <div className='chatbox-footer'>
            <IconButton>
                <EmojiEmotions />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
                <form onSubmit={sendMessage}>
                    <input type='text' placeholder='Type your message' value={input} onChange={(e)=>setInput(e.target.value)} />
                    <input type='submit' value="submit" />
                </form>
            <IconButton>
                <MicNoneOutlined />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatBox;