import './App.css';
import ChatBox from './cmp/ChatBox/ChatBox';
import NotFound from './cmp/NotFound/NotFound';
import Sidebar from './cmp/Sidebar/Sidebar';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
        <div className='App-grid'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<ChatBox />} />
            <Route path='/room/:roomId' element={<ChatBox />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>   
    </Router>
    </>
  );
}

export default App;
