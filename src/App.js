import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <Routes>
      <Route path="React-Solo-Capstone/" element={<Home />} />
      <Route path="React-Solo-Capstone/crypto/:id/" element={<Details />} />
    </Routes>
  );
}

export default App;
