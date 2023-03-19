import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { mobile } from '../responsive.js';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    ${mobile({ gap:0 })}
`
const Heading = styled.h1`
  margin: 35px 22px 0px;
`

const Products = ({cat, filters, sort, count}) => {

  const[products,setProducts] = useState([]);
  const[filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat 
            ? `http://localhost:8000/api/products?category=${cat}` 
            : "http://localhost:8000/api/products"
        );
        setProducts(res.data);
        console.log(products);
      } catch(err) {
        console.log(err);
      }
    }
    getProducts();
  },[cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key,value]) => 
          item[key].includes(value)
        )
      )
    )
  },[products,cat,filters]);

  useEffect(() => {
    if(sort === "newest") {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if(sort === "asc") {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  },[sort]);
  

  return (
    <>
    <Heading>
      LATEST ARRIVALS
    </Heading>
    <Container>
        { cat 
          ? filteredProducts.map((item) => (<Product item={item} id={item.id} />)) 
          : products.slice(0,count).map((item) => (<Product item={item} id={item.id} />))
        }
      </Container>
    </>
  )
}

export default Products