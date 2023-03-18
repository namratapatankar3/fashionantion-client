import styled from 'styled-components';
import { mobile } from '../responsive';
import {useHistory} from 'react-router-dom'
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
    const history=useHistory()
    const createHandler = () => {
        history.push('/')
    }
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email ID"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                  <Agreement>
                      <input type="checkbox"/>
                      By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={createHandler}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register