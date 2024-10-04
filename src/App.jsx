import { useState } from 'react'
import "./assets/stylebaru.scss";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profil from './pages/Profil'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Detail from './pages/Detail'
import Error from './pages/Error'
import Beranda from './pages/beranda/Beranda';
import Product from './pages/product/Product'
import Negara from './pages/negara/Negara'
import Rincian from './pages/Rincian'
import ThemeContext from './components/context/ThemeContext';

function App() {
  const [count, setCount] = useState(0)

const theme = useState("Light")
const [get, set] = useState();

  return (

   <BrowserRouter>
   <ThemeContext.Provider value={theme}>
   <Navbar/>
   <Routes>
    <Route path='/beranda' element={<Beranda/>} />
    <Route path='/profil' element={<Profil/>} />
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='/rincian/:id' element={<Rincian/>} />
    <Route path='/product' element={<Product/>} />
    <Route path='/negara' element={<Negara/>} />
    <Route path='*' element={<Error/>} />
   </Routes>
   </ThemeContext.Provider>
   <Footer/>
   </BrowserRouter>
  )
}

export default App