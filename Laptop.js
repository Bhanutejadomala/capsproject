import { useState } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const [search, setSearch] = useState('')

  const laptop = [
    {
      id: 1,
      name: 'Apple MacBook Pro 16 2023 Laptop (Apple M3 Max/ 48GB/ 1TB SSD/ macOS)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iItJKshN3-w420-h420/apple-macbook-pro-16.webp',
      price: 30,
      "sale": "50%off"
    },
    {
      id: 2,
      name: 'HP Victus 15-fb0157AX Gaming Laptop (AMD Ryzen 5 5600H/ 8GB/ 512GB SSD/ Win11/ 4GB Graph)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iD1xiJxI7-w420-h420/hp-victus-15-fb0157a.webp',
      price: 49,
      "sale": "30%off"
    },
    {
      id: 3,
      name: 'Lenovo ThinkBook 15 G5 21JF002PIN Laptop (AMD Ryzen 5 7530U/ 8GB/ 512 GB SSD/ Win11)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iunkFSjxh-w420-h420/lenovo-thinkbook-15.webp',
      price: 30,
      "sale": "30%off"
    },
    {
      id: 4,
      name: 'Asus VivoBook 15 X1500EA-EJ311W Laptop (11th Gen Core i3/ 8GB/ 256GB SSD/ Win11)',
      imageUrl: 'https://cdn1.smartprix.com/rx-i21dRBlHk-w420-h420/asus-vivobook-15-x15.webp',
      price: 55,
      "sale": "60%off"
    },
    {
      id: 5,
      name: 'Dell Alienware M16 R2 2024 Gaming Laptop (Intel Core Ultra 9 185H/ 16GB/ 1TB SSD/ Win 11/ 8GB RTX4070)',
      imageUrl: 'https://cdn1.smartprix.com/rx-ixJQF8IpV-w420-h420/dell-alienware-m16-r.webp',
      price: 30,
      "sale": "50%off"
    },
    {
      id: 6,
      name: 'Acer Nitro V ANV15-51 2023 Gaming Laptop (13th Gen Core i5/ 16GB/ 512GB SSD/ Win11/ 6GB Graph)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iYTHqR6dC-w420-h420/acer-nitro-v-anv15-5.webp',
      price: 60,
      "sale": "70%off"
    },
    {
      id: 7,
      name: 'Samsung Galaxy Book 4 Ultra Laptop (Intel Core Ultra 7 155H/ 32 GB RAM/ 1 TB SSD/ 6 GB Graphics)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iQoA3WpnB-w420-h420/samsung-galaxy-book.webp',
      price: 24,
      "sale": "10%off"
    },
    {
      id: 8,
      name: 'Microsoft Surface Laptop 5  Laptop (12th Gen Core i7/ 8GB/ 256GB SSD/ Win11)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iH2Ksp04i-w420-h420/microsoft-surface-la.webp',
      price: 67,
      "sale": "70%off"
    },
    {
      id: 9,
      name: 'Xiaomi Redmi G Pro 2024 Gaming Laptop (14th Gen Core i9/ 16GB/ 1TB SSD/ Win11 Home/ RTX 4060)',
      imageUrl: 'https://cdn1.smartprix.com/rx-inIfI5z9u-w420-h420/xiaomi-redmi-g-pro-2.webp',
      price: 62,
      "sale": "60%off"
    },
    {
      id: 10,
      name: 'Google Pixel Slate C1A Laptop (Intel Core M3/ 8GB/ 64GB/ Chrome OS)',
      imageUrl: 'https://cdn1.smartprix.com/rx-i6ZbiF94R-w420-h420/google-pixel-slate-c.webp',
      price: 25,
      "sale": "20%off"
    },
    {
      id: 11,
      name: 'Realme Book Prime Laptop (11th Gen Core i5/ 16GB/ 512GB SSD/ Win11)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iIUqSP668-w420-h420/realme-book-prime-la.webp',
      price: 54,
      "sale": "30%off"
    },
    {
      id: 12,
      name: 'HP 14s-dq5138tu Laptop (12th Gen Core i3/ 8GB/ 512GB SSD/ Win11 Home)',
      imageUrl: 'https://cdn1.smartprix.com/rx-i6JpW7cFK-w420-h420/hp-14s-dq5138tu-lapt.webp',
      price: 34,
      "sale": "30%off"
    },
    {
      id: 13,
      name: 'Asus TUF F15 FX506HF-HN024W Gaming Laptop (11th Gen Core i5/ 8GB/ 512GB SSD/ Win11/ 4GB Graph)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iddNWcUSU-w420-h420/asus-tuf-f15-fx506hf.webp',
      price: 20
    },
    {
      id: 14,
      name: 'Infinix Zerobook 2023 Laptop (13th Gen Core i9/ 32GB/ 1TB SSD/ Win 11 Home)',
      imageUrl: 'https://cdn1.smartprix.com/rx-iH4FwlZ9q-w420-h420/infinix-zerobook-202.webp',
      price: 45,
      "sale": "50%off"
    },
    {
      id: 15,
      name: 'Samsung Galaxy Book 4 NP750XGK-KS2IN Laptop (Intel Core 5 Processor 120U/ 16GB/ 512GB SSD/ Win11)',
      imageUrl: 'https://cdn1.smartprix.com/rx-ioGGCa7zG-w420-h420/samsung-galaxy-book.webp',
      price: 22
    },
   
  ]
  
  const handler = (e) => {
    setSearch(e.target.value)
  }

 
  return (
    <div name="laptop">
      <div className="container">
        <div className="row m-4">
          <div className="col-md-12">
            <input type="text" value={search} onChange={handler} className="form-control"></input>
          </div>
        </div>

        <br/>
        <h1>LAPTOPS</h1>
        <div className="row">
          {laptop.filter((x)=>x.name.includes(search)).map((val)=>
          <div className="col-md-3">
          <div class="card p-3 ">
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
