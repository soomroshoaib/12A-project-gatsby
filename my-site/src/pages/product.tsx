import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Productone from "../components/product1"
import Productwo from "../components/product2"
import Mein from "../components/mein"
// import { Link } from "gatsby"

const product = () => {
  return (
      <div>
      
        <h1> see Product</h1>
    <Layout>


         
      <Router basepath="/product">
        <Productone path="/page1" />
        <Productwo path="/page2" />
        <Mein path="/" />
      </Router>
    </Layout>

    </div>
  )
}

export default product