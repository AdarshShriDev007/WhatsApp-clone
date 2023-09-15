import { AttachFile, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import "./ChatBox.css";

function ChatBox() {
  return (
    <div className='chatbox'>
        <div className='chatbox-header'>
            <div className='chatbox-header-left'>
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className='chatbox-header-left-info'>
                    <h4>Coders</h4>
                    <span>Last Seen...</span>
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

        <div className='chatbox-body'></div>

        <div className='chatbox-footer'></div>
    </div>
  )
}

export default ChatBox;