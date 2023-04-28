import { createContext, useContext, useState } from "react";
import { getAllProducts } from "../services/product-services";

const FoodContext = createContext();
function FoodProvider({ children }) {
  const [allFood, setAllFood] = useState([]);
  const [singleFood, setSingleFood] = useState({
    id: 2,
    name: "organic pumpkin",
    price: 3304,
    category: "soups",
    description:
      "Sunt accusamus fugit. Quae explicabo autem. Sed dolorum ratione. Vero animi inventore. Libero velit rerum. Dolores voluptatem est. Voluptatem qui voluptatem. Voluptatem veniam eum. Natus commodi cupiditate. Nulla adipisci similique. Aut ei.",
    picture_url:
      "https://img.freepik.com/free-photo/organic-pumpkin-puree-white-bowl_193819-1820.jpg",
  });

  const getAllFood = () => {
    getAllProducts()
      .then((data) => setAllFood(data))
      .catch(console.log);
  };

  return (
    <FoodContext.Provider
      value={{
        singleFood,
        setSingleFood,
        getAllFood,
        allFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

function useFoodData() {
  return useContext(FoodContext);
}

export { FoodProvider, useFoodData };
