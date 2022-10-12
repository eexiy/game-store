import './App.css';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';
import { store } from './redux';
import GamePage from './Pages/GamePage/GamePage';
import OrderPage from './Pages/OrderPage/OrderPage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/*' element={<HomePage />} />
            <Route path='/app/:title' element={<GamePage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
