/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useFoodData } from "../context/Food-Context";
import { colors } from "../styles/colors";

const Container = styled.div`
  background-color: ${colors.light_gray};
  width: 414px;
  height: 100vh;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

`;

const Image = styled.img`
  margin-top: 30px;
  width: 200px;
    height: 200px;
    border-radius: 50%;
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%);
`;

const FoodName = styled.h1`
 
  margin-bottom: 10px;
  color: ${colors.black};
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`;

const Price = styled.p`
  color: ${colors.orange};
  font-weight: 600;
  font-size: 28px;
   text-align: center;
  margin: 0px;
`;

const Title = styled.h3`
  color: ${colors.black};
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-right: auto;
  padding-left: 40px;
 
`

const Description = styled.p`
  color: ${colors.black};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  padding:0 40px;
  margin: 0px;
`



export const SingleFood = () => {
  const { singleFood } = useFoodData();

  const nameSeparated = singleFood.name.split(" ");
  const capitalizedName = nameSeparated
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <Container>
        <Image src={singleFood.picture_url} />
        <FoodName>{capitalizedName}</FoodName>
        <Price>${singleFood.price / 100}</Price>
        <Title>Description</Title>
        <Description>{singleFood.description}</Description>

        <Link style={{ display: "flex", justifyContent: "center", }} to="/">
          <Button style={{ position: 'absolute', bottom: 12 }}>Go Back</Button>
        </Link>

      </Container>

    </>
  );
};


