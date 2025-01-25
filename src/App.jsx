
import { Routes,Route } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame';
import PlayGame from './pages/Playgame';


function App() {
  

  return (
    
    <div>
      
      
     <Routes>
        
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
     </Routes>

    </div>
  );
}

export default App
