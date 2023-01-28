import React, {useState,useEffect}  from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

   const [products, setProducts] = useState([]);
  
     //to fetch api from backend
   useEffect(()=>{
        const fetchProducts =async ()=>{
            const {data} =await axios.get('/api/products') // route comming from bakend// connection => packeage call proxy add backed localhost add
          
          setProducts(data)
        }


        fetchProducts();

   },[])


  return (
    <>
         <h1>Latest Products</h1>
         <Row>
              {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4}>
                      <Product product={product}/>
                </Col>
              ))}
         </Row>
    </>
  )
}

export default HomeScreen