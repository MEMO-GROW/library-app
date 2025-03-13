import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Hero from './pages/Hero';
import Login from './pages/Login';
import Home from './pages/Home';
import Books from './pages/Books';
import SingleBook from './pages/SingleBook';
import AddBook from './pages/AddBook';

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
