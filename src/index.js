import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
   BrowserRouter, Routes,Route
} from 'react-router-dom'
import { AppProvider  } from './component/Context/Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookDetails from './component/BookDetails.js/BookDetails';
import Booklist from './component/BookList/Booklist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<Booklist />} />
        <Route path='/bookdetails/:id' element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

