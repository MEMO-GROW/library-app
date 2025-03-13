import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Hero from './pages/landing/Hero';
import Login from './pages/landing/Login';
import Home from './pages/landing/Home';
import Books from './pages/landing/Books';
import SingleBook from './pages/landing/SingleBook';
import AddBook from './pages/landing/AddBook';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Hero />} />
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />
    <Route path='/books' element={<Books />} />
    <Route path='/single-book' element={<SingleBook />} />
    <Route path='/add-book' element={<AddBook />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
