import styled from 'styled-components';
import { mobile } from '../responsive';
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { register } from '../redux/apiCalls';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
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
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 10px 10px;
    padding: 10px;
    border-radius: 20px;
      background-color: white;
     border: 1px solid lightgray;
     &:focus {
     outline:none;
   
 };
`
const Agreement = styled.span`
    margin: 20px 0;
    font-size: 13px;
`
const Button = styled.button`
  
    padding: 10px 35px 10px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px;
    border-radius: 20px;
`


const Register = () => {
    const history=useHistory();

    const [user, setUser] = useState({
      username: "",
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      gender: "",
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      register(dispatch,user);
      history.push('/');
    }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input 
                  placeholder="Username"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <Input 
                  placeholder="Full Name"
                  type="text"
                  value={user.fullname}
                  onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                />
                <Input 
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <Input 
                  placeholder="Password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Input 
                  placeholder="Confirm Password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Input 
                  placeholder="Phone No."
                  type="text"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
                <Agreement>
                      <input type="checkbox"/>
                      By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type='submit'>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register