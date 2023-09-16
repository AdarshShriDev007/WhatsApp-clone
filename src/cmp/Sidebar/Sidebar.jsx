import { Chat, DonutLarge, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import SidebarRoom from './SidebarRoom';
import { db,collection, query, orderBy, onSnapshot,signOut,auth } from "../../firebase";
import { useUserContext } from "../../contextApi/User";

function Sidebar() {

const [rooms,setRooms] = useState([]);
const userInfo = useUserContext();
const user = userInfo.user.userData;

useEffect(()=>{
    const queryrooms = query(collection(db, "rooms"), orderBy("timestamp", "desc"));
    onSnapshot(queryrooms,(snapshot)=>{
       const snap = snapshot.docs.map((doc)=>({
            id : doc.id,
            data : doc.data()
        }));
        setRooms(snap);
    });
},[]);


return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-left'>
                <IconButton onClick={()=>signOut(auth)}>
                    <Avatar src={user.photoURL} />
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
            {
                rooms && rooms.map(({id,data})=>{
                    return <SidebarRoom key={id} id={id} roomName={data.name} />
                })
            }
            
        </div>
    </div>
  )
}

export default Sidebar;