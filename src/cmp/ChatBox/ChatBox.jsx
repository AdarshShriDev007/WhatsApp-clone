import { AttachFile, EmojiEmotions, MicNoneOutlined, MoreVert, Search } from '@mui/icons-material';
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

        <div className='chatbox-body'>
           <div className='chatbox-message-box'>
                <h4>Adarsh kumar shri</h4>
                <div className='chatbox-message'>
                    <span>How are you ?</span>
                    <span>04:34 AM</span>
                </div>  
           </div>
           <div className='chatbox-message-box chat-sender'>
                <h4>Adarsh kumar shri</h4>
                <div className='chatbox-message'>
                    <span>How are you ?</span>
                    <span>04:34 AM</span>
                </div>  
           </div>    
        </div>

        <div className='chatbox-footer'>
            <IconButton>
                <EmojiEmotions />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
                <form>
                    <input type='text' placeholder='Type your message' />
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