import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Landing from './pages/landing/Landing';
import Books from './pages/landing/Books';
import SingleBook from './pages/landing/SingleBook';
import AddBook from './pages/landing/AddBook';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/books' element={<Books />} />
    <Route path='/single-book' element={<SingleBook />} />
    <Route path='/add-book' element={<AddBook />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
