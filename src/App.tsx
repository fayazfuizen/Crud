import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Header from './Header';
import View from './View/view';
 import ViewItem from './viewitem';
//  import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/view" element={<View />} />
           <Route path="/view/:id" element={<ViewItem />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
