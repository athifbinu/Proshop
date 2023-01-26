import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
         <h1>Latest Products</h1>
         <Row>
              {Products.map(product =>(
                <Col sm={12} md={6} lg={4}>
                      <Product product={product}/>
                </Col>
              ))}
         </Row>
    </>
  )
}

export default HomeScreen