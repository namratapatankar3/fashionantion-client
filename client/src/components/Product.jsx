import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from'react-router-dom';

const Info = styled.div`
    // opacity: 0;
    width: 100%;
    height: 25%;
    // position: absolute;
    // top: 0;
    // left: 0;
    // z-index: 3;
    display: flex;
     flex-direction:column;
    align-items: left;
   
    justify-content: center;
    background-color:#e3fafa;
    // transition: all 0.5s ease;
    cursor: pointer;
       border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    flex-direction:column;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    //box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;

     &:hover{
          border-radius: 15px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    }
`
// const Circle = styled.div`
//     height: 200px;
//     width: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
// `
const ImageContainer = styled.div`
    height: 75%;
    // z-index: 2;
    display:flex;
    align-items:center;
    justify-content:center;

`
// const Icon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//     background-color: white;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: #e9f5f5;
//         transform: scale(1.1);
//     }
// `
const Title = styled.h3`
color:#595858;
margin:0px 10px 0px;

`
const Price = styled.h2`
 font-size: 14px;
margin:7px 10px 0px;
`
const Image = styled.img`

height:70%;
`
const Product = ( {item} ) => {
  return (
    // <Container>
    //     <Circle />
    //     <Image src={item.img}/>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlinedIcon />
    //         </Icon>
    //         <Icon>
    //             <Link to={`/product/${item._id}`}>
    //                 <SearchOutlinedIcon />
    //             </Link>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlinedIcon />
    //         </Icon>
    //     </Info>
    // </Container>
       <Link to={`/product/${item._id}`} style={{ textDecoration: 'none',color:'inherit' }}>
          <Container>
              <ImageContainer>
                  <Image src={item.img}/>
              </ImageContainer>
              
       <Info>
              <Title>{item.title}</Title>
              <Price>Rs. { item.price}</Price>
          </Info>
      </Container>             
              </Link>
      
  )
}

export default Product