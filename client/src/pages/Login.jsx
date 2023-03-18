import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
      
`
const Wrapper = styled.div`
    width: 25%;
    height:40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
    text-align:center;
    color: teal;
    margin-top:20px;
    margin-bottom:15px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px ;
    padding: 10px;
    border-radius: 20px;
     background-color: white;
     border: 1px solid lightgray;
       margin-bottom:15px;
     &:focus {
     outline:none;
   
 };
    
`
const Button = styled.button`
   //width: 30%;
    padding: 10px 20px 10px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px;
    border-radius: 20px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const LinkTo = styled.a`
    margin: 5px 0;
    //text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    color:teal;
    margin:10px;
  `  
const LinkWrap = styled.div`
display:flex;
//margin:10px;
justify-content:space-between;

`

const Error = styled.span`
    color: red;
`

const Login = () => {
  const history=useHistory()
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
      login(dispatch, { username, password });
      history.push('/')
  };

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={ handleClick } disabled={isFetching}>LOGIN</Button>
                  {/* { error && <Error>Something went wrong...</Error> } */}
                  <LinkWrap>
                      <LinkTo>Forget Password?</LinkTo>
                     <Link to="/register" style={{ textDecoration: 'none',color:'inherit',marginTop:'10px'}}> <LinkTo>Sign Up</LinkTo></Link>
                  </LinkWrap>
                
            </Form>
        </Wrapper>        
    </Container>
  )
}

export default Login