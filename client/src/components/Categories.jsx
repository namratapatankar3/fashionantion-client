import styled from 'styled-components';
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0", flexDirection: "column" })}
    
`
const Heading = styled.h1`
  margin: 35px 22px 0px;
`

const Categories = () => {
  return (
    <>
    <Heading>
      WHO ARE YOU SHOPPING FOR?
    </Heading>
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </Container>
    </>
  )
}

export default Categories