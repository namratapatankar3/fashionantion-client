import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomePage = styled.div`
  background-color:#f6f5f3;
`

const Button = styled(Link)`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin: 0 auto 20px;
  width: 70px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomePage>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products count={12} />
        <Button to="/products">See More</Button>
        <Newsletter />
        <Footer />
    </HomePage>
  )
}

export default Home;

