import './App.css';
import ChatBox from './cmp/ChatBox/ChatBox';
import Sidebar from './cmp/Sidebar/Sidebar';

function App() {
  return (
    <>
      <div className='App'>
         <div className='App-grid'>
            <Sidebar />
            <ChatBox />
         </div>
      </div>
    </>
  );
}

export default App;
