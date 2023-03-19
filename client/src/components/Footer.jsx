import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { categories } from '../data';
const Container = styled.div`
    display: flex;
   
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Tagline = styled.p`
    margin: 20px 0;
    color: teal;
`
const Creators = styled.p`
    margin: 20px 0;
    color: #bdbdbd;
    font-size: 12px;
`

const Copyright = styled.p`
    margin: 20px 0;
    color: #808080;
`


const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin: 16px 0;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
   // flex-wrap: wrap;
   flex-direction:column;
   color: #808080;
   
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor:pointer;
    textDecoration: 'none';
    color:'inherit';

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin: 16px 0;
    ${mobile({ backgroundColor: "lightgray" })}
`
const ContactItem = styled.div`
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    color: #808080;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>FashioNation</Logo>
            <Tagline>
                "We are bringing a change and you are part of it."
            </Tagline>
            <Copyright>
                &copy; 2023 FashioNation. All Rights Reserved By FashioNation 
            </Copyright>
            <Creators>
                Namrata and Saubhagya's Creation.
            </Creators>
            
        </Left>
        <Center>
            <Title>QUICK LINKS</Title>
            <List>
                  
                <Link to='/cart' style={{ textDecoration: 'none',color:'inherit' }}><ListItem>CART</ListItem></Link> 
                <Link to='/favorite' style={{ textDecoration: 'none',color:'inherit' }}><ListItem>WISHLIST</ListItem></Link>
                {categories.map((item) => {
                      return(<Link to={`/products/${item.cat}`} style={{ textDecoration: 'none',color:'inherit'}}>
                          <ListItem>{item.cat } </ListItem>
                </Link>)
                })}
                
            </List>
        </Center>
        <Right>
            <Title>CONTACT</Title>
            <ContactItem>
                Arihant, Near Holiday Inn Express, Pune
            </ContactItem>
            <ContactItem>
                +91 9876543210
            </ContactItem>
            <ContactItem>
                contact@fashionation.com
            </ContactItem>
              {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
              <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Right>
    </Container>
  )
}

export default Footer