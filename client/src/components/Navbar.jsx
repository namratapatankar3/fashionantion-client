import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../data';
import PersonIcon from '@mui/icons-material/Person';
const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 10px;
  padding: 5px;
    border-radius:20px;
  &:focus{
  outline: 1px dashed red;
}
`

const Input = styled.input`
    border: none;
    width :400px;
    height:23px;
    color:black;
    background-color:#f6f5f3;
     &:focus {
     outline: none;
   
 };
    ${mobile({ width: "100px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
     
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{ textDecoration: 'none',color:'inherit' }}><Logo>FashioNation</Logo></Link>
            </Left>
            <Center>
                 <SearchContainer> 
                    <SearchIcon style={{ color: "gray", fontSize: 20 ,marginRight:"10px"}} />
                      <Input placeholder='Search' />
                      </SearchContainer> 
            </Center>
              <Right>
                  {categories.map((item) => {
                      return(<Link to={`/products/${item.cat}`} style={{ textDecoration: 'none',color:'inherit',fontSize:"50px",fontWeight:'bold'}}>
                          <MenuItem>{item.cat }</MenuItem>
                  </Link>)
                  })}
                  {/* <Link to={`/products/${item.cat}`}>
                      <MenuItem>MEN</MenuItem>
                  </Link>
                  <Link to="/women">
                      <MenuItem>WOMEN</MenuItem>
                  </Link>
                  <Link to="/kids">
                      <MenuItem>KIDS</MenuItem>
                  </Link> */}
                  {/* <Link to="/register">
                      <MenuItem>REGISTER</MenuItem>
                  </Link>
                <Link to="/login">
                      <MenuItem>SIGN IN</MenuItem>
                      </Link> */}
                   <Link to="/login" style={{ textDecoration: 'none',color:'inherit'  }}>
                    <MenuItem>
                          <PersonIcon/>
                    </MenuItem>
                  </Link>
                <Link to="/favorite" style={{ textDecoration: 'none',color:'inherit'  }}>
                    <MenuItem>
                          <FavoriteBorderIcon/>
                    </MenuItem>
                  </Link>
                  <Link to="/cart" style={{ textDecoration: 'none',color:'inherit'  }}>
                    <MenuItem>
                           <ShoppingCartOutlinedIcon />
                    </MenuItem>
                  </Link>
                 
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar