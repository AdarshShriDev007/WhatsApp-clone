import { Chat, DonutLarge, MoreVert } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-left'>
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>
            <div className='sidebar-header-right'>
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;