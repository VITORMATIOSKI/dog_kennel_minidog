import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import Navbar from './components/Navbar'
import DogPage from './screens/DogPage'
import Footer from './components/Footer'
import { Products } from './screens/Product'

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogpage" element={<DogPage/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
