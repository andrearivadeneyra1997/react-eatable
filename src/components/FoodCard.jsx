import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useFoodData } from "../context/Food-Context";
import { colors } from "../styles/colors";
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';

const FoodCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 212px;
  width: 156px;
  background: ${colors.white};
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  margin-bottom: 30px;
`;

const ImageCard = styled.div`
  position: relative;
  height: 100px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 70px;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  left: 13px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  top: -40px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 132px;
  padding: 0 12px;
  margin: 0;
`;

const LinkCard = styled.div`
  display: flex;
  height: 16px;
  justify-content: space-evenly;
  align-items: center;
`;

const Link = styled.a``;

const LinkImage = styled.img`
  width: 12px;
  height: 12px;
`;

export default function FoodCard({ product }) {
  const navigate = useNavigate();
  const { setSingleFood } = useFoodData();
  const nameSeparated = product?.name?.split(" ");
  const capitalizedName = nameSeparated ? nameSeparated
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") : "";

  function handleSingleFood() {
    setSingleFood(product);
    navigate("/single-food");
  }

  function handleEdit() {
    setSingleFood(product);
    navigate("/edit");
  }

  return (
    <FoodCardContainer>
      <ImageCard onClick={handleSingleFood}>
        <Image src={product?.picture_url} alt="Food image" />
      </ImageCard>
      <Card>
        <Text>{capitalizedName}</Text>
        <Text style={{ color: colors.orange }}>${product?.price / 100}</Text>
      </Card>
      <LinkCard>
        <Link onClick={handleEdit}>
          <LinkImage src={Edit} />
        </Link>
        <Link>
          <LinkImage src={Delete} />
        </Link>
      </LinkCard>
    </FoodCardContainer>
  );
}
