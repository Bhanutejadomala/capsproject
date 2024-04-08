import ReactDom from 'react-dom'
// import App from './App'
import Sneakers from './Sneakers'
import SmartWatch from './SmartWatch'
import Laptop from './Laptop'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
   <>
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

   </>
)

