import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Routes>
        <Route path='/*' element={<HomePage />} />
      </Routes>
      </div>
    </div>

  );
}

export default App;
