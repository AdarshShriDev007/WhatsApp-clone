import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@mui/material";
import { Add, AddCircle } from '@mui/icons-material';

function SidebarRoom({addNewChat}) {

    const [avatar,setAvatar] = useState("");

    useEffect(()=>{
       setAvatar(Math.floor(Math.random() * 5000));    
    },[]);

  return (
    <>
        {
            !addNewChat ? (<div className='sidebar-room'>
            <IconButton>
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${avatar}.svg`} />
            </IconButton>
            <div className='sidebar-room-info'>
                <h4>Coders</h4>
                <span>Last message...</span>
            </div>
        </div>) : (<div className='add-new-chat'>
            <div className='add-chat'>
                <h4>Add New Chat</h4>
                <IconButton>
                    <AddCircle />
                </IconButton>
            </div>
        </div>)
        }
    </>
  )
}

export default SidebarRoom;