import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styling/SingleProducts.css'; 

const SingleProducts = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
            }).catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <div className="single-product-container">
            {
                data ? (
                    <>
                        <div className="product-image">
                            <img 
                                src={data.image} 
                                alt={data.title} 
                                style={{
                                    width: "100%", 
                                    height: "auto", 
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }} 
                            />
                        </div>
                        <div className="product-details">
                            <h2>{data.title}</h2>
                            <p><strong>Category:</strong> {data.category}</p>
                            <p><strong>Price:</strong> ${data.price}</p>
                            <p><strong>Description:</strong> {data.description}</p>
                        </div>
                    </>
                ) : <h1>Loading...</h1>
            }
        </div>
    )
}

export default SingleProducts;
