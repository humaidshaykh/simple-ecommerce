// function Home(){

//     return(
//         <>
//         <h1>Home</h1></>
//     )

// }

// export default Home

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styling/Home.css'; // You can use an external CSS file for styling

const Home = () => {
  const [data , setData] = useState(null);

  // usenavigate
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  const singleUser = (item) =>{
    navigate(`SingleProducts/${item.id}`)
  }
  return (
    <>
    <h1 className='text-center'>All Products</h1>
    <div className="product-grid">
      {
        data ? data.map((item)=>{
          return (
            <div key={item.id} className="product-card">
              <img 
                style={{
                    width: "100%", 
                    height: "320px", 
                    objectFit: "cover", 
                    borderRadius: "6px", 
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                }}
                src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={()=> singleUser(item)}>View Product</button>
            </div>
          )
        }) : <h1>Loading..</h1>
      }
    </div>
    </>
  )
}

export default Home
