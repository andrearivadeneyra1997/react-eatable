import styled from "@emotion/styled";
import { useEffect } from "react";
import { useFoodData } from "../context/Food-Context";
import FoodCard from "./FoodCard";
import { colors } from "../styles/colors";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const FoodListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 332px;
  heigth: 100vh;
  gap: 20px;
  padding-bottom: 20px;
`;
const Div = styled.div`
  width: 414px;
  height: 100vh;
  max-height: 896px;
  border-radius: 20px;
  background: #F6F6F9;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  padding: 48px 0;
  text-align: center;
  box-sizing: border-box;
`
const TitleBox = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: ${colors.black};
  font-size: 22px;
  line-height: 35px;
`;

const Footer = styled.div`
  position: fixed;
  height: 90px;
  display: flex;
  width: 414px;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: ${colors.light_gray};
`

export default function FoodList() {
  const navigate = useNavigate();
  const { allFood, getAllFood } = useFoodData();

  useEffect(() => {
    const fetchData = async () => {
      await getAllFood();
    }
    fetchData();
  }, []);
  function handleCreate() {
    navigate("/create")
  }
  return (
    <Div>
      <TitleBox>
        <Title>Product Dashboard</Title>
      </TitleBox>
      <FoodListWrapper>
        {allFood.map((product) => (
          <FoodCard key={product.id} product={product} />
        ))}
      </FoodListWrapper>
      <Footer>
        <Button onClick={handleCreate}> Create Product </Button>
      </Footer>
    </Div>
  );
}
