import './App.css';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/*' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
