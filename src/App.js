import './App.css';
import ChatBox from './cmp/ChatBox/ChatBox';
import LandingPage from './cmp/LandingPage/LandingPage';
import NotFound from './cmp/NotFound/NotFound';
import Sidebar from './cmp/Sidebar/Sidebar';
import Login from './cmp/Login/Login';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import { useUserContext } from './contextApi/User';
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect } from 'react';

function App() {

  const userInfo = useUserContext();

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        userInfo.setUser({
          userData : user
        });
      }
      else{
        userInfo.setUser(null);
      }
    });
  },[]);

  return (
    <>
      <Router>
        {
          !userInfo.user ? (<Login />) : (<div className="App">
          <div className='App-grid'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/room/:roomId' element={<ChatBox />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div> )
        }
          
    </Router>
    </>
  );
}

export default App;
