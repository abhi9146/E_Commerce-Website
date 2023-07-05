import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
       <Header/>
       <main style={{height:"82vh"}}>
          {props.children}
       </main>
       <Footer/>
    </>
  )
}

export default Layout