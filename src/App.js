import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage'
import GalleryPge from './pages/GalleryPge'
import CountryPage from './pages/CountryPage';

function App() {
  return (
  <div>
   <>
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage />}></Route>
  <Route path='/about' element={<AboutPage />}></Route>
  <Route path='/countries' element={<CountryPage />}></Route>
  <Route path='/gallery' element={<GalleryPge />}></Route>
</Routes>
</BrowserRouter>

   </>
  </div>
  );
}

export default App;
