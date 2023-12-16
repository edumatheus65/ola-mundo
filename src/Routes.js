import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import NotFound404 from './Pages/NotFound404/NotFound404';
import Menu from './Components/Menu/Menu';
import Footer from 'Components/Footer/Footer';
import DefaultPage from 'Components/DefaultPage/DefaultPage';
import Post from 'Pages/Post/Post'
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';


function AppRoutes() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutMe />} />          
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )

}

export default AppRoutes;
