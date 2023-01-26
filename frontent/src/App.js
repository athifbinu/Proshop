import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      
        <Header/>
        <main className='py-4'>
          <Container>
          <h1>welcome to app</h1>
          </Container>
        </main>
        <Footer/>
    </>
  )
}

export default App
