import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Footer from './pages/Footer';
import Post from "./pages/Post";
import Nav from './pages/Nav';
import Sidebar from './pages/Sidebar';
import List from './pages/List';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Sidebar/>
      <Routes>
          <Route path="/" element ={<Layout />}></Route>
          <Route path="post" element ={<Post />}></Route>
          <Route path="List" element ={<List />}></Route>
          <Route path="Search" element ={<Search />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;