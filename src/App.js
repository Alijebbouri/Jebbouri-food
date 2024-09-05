import './App.css';
import ListFood from './components/ListFood';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

function App({ cartItems }) {
  return (
    <div>
      {/* Include the Navbar at the top of the app */}
      <Navbar cartItems={cartItems} />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<ListFood />} />
        <Route path="/about" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;