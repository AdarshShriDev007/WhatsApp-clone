import { Chat, DonutLarge, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import SidebarRoom from './SidebarRoom';

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

        <div className='sidebar-search'>
            <div className='sidebar-search-box'>
                <IconButton>
                    <Search />
                </IconButton>
                <input type='text' placeholder='Search or start a new chat' />
            </div>
        </div>

        <div className='sidebar-rooms'>
            <SidebarRoom addNewChat />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
            <SidebarRoom />
        </div>
    </div>
  )
}

export default Sidebar;