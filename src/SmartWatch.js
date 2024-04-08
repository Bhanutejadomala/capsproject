import { useState } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import smart_watch from "./smartWatch/smart_watch"
function App() {
  const [data, setData] = useState(smart_watch)
  const [search, setSearch] = useState('')

  const handler = (e) => {
    setSearch(e.target.value)
  }

 
  return (
    <div>
      <div className="container">
        <div className="row m-4">
          <div className="col-md-12">
            <input type="text" value={search} onChange={handler} className="form-control"></input>
          </div>
        </div>

        <br/>
        <h1>SMART WATCH</h1>
        <div className="row">
          {data.filter((x)=>x.name.includes(search)).map((val)=>
          <div className="col-md-3">
          <div class="card p-5 ">
            <img src={val.imageUrl} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 className="card-title">{val.name}</h5>
                <h4 className="card-title">${val.price} <br></br>{val.sale}</h4>
              </div>
          </div>
          </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default App
