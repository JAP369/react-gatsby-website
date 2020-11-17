import React from "react"
import styled from "styled-components"

const Trips = () => {
  return (
    <ProductsCtn>
      <ProductsHdg>heading</ProductsHdg>
      <ProductsWpr>wrapper</ProductsWpr>
    </ProductsCtn>
  )
}

export default Trips

const ProductsCtn = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: red;
  color: #fff;
`

const ProductsHdg = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductsWpr = styled.div`
  /* font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000; */
`
