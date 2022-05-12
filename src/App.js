
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div >
     <NavBar></NavBar>
     <Routes>
       <Route path='/' />
     </Routes>
     
    </div>
  );
}

export default App;
