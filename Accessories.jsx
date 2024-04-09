import React from 'react'
import Sneakers from './Sneakers'
import SmartWatch from './SmartWatch'
import Laptop from './Laptop'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/Sneakers">Sneakers</Link>
      <Link to="/SmartWatch">SmartWatch</Link>
      <Link to="/Laptop">Laptop</Link>
        <Routes>
          <Route path="/Sneakers" element={<Sneakers/>}/>
          <Route path="/SmartWatch" element={<SmartWatch/>}/>
          <Route path="/Laptop" element={<Laptop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
