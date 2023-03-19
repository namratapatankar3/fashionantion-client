import { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data.js";
import { mobile } from '../responsive.js';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw); 
`
const Slides = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
   

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const InsideInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px 20px 10px;
    font-size:15px;
    background-color: #2674e0;
    cursor: pointer;
    border-radius: 25px;
    color: #fff;
    border: none;
    width: 150px;
`
const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0); 
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={ () => handleClick("left") }>
           <ArrowLeftOutlinedIcon /> 
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slides bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <InsideInfo>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InsideInfo>
                    </InfoContainer>
                </Slides>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={ () => handleClick("right") }>
           <ArrowRightOutlinedIcon /> 
        </Arrow>
    </Container>
  )
}

export default Slider