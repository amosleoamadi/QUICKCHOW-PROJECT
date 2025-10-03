import React, { useContext, useState } from "react";
import {
  AddTocartOrder,
  Cards,
  CardsImage,
  PopularConatiner,
  ProductCards,
  ProductDetails,
  ProductDisplay,
} from "../../components/styles/PopularFoodsstyle";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../../components/Ui/Button";
import image from "../../assets/bites1.jpg";
import { LocalFoods, Healthy, QuickBites, Drinks } from "./products";
import { AppContext } from "../../utils/AppContext";

const PopularFoods = () => {
  const { setPopup } = useContext(AppContext);
  const [active, setActive] = useState("local");
  const objtoMap = [
    {
      name: "local",
      arr: LocalFoods,
    },
    {
      name: "healthy",
      arr: Healthy,
    },
    {
      name: "Quick",
      arr: QuickBites,
    },
    {
      name: "Drinks",
      arr: Drinks,
    },
  ];
  const theItem = objtoMap.find((item) => item.name === active).arr;
  return (
    <PopularConatiner>
      <p className="pick">Quick pick</p>
      <h2 className="foods">Popular Foods</h2>
      <ProductDisplay>
        <ProductDetails>
          <nav
            className={`sectrion_btn ${active === "local" ? "active" : ""}`}
            onClick={() => setActive("local")}
          >
            Local Favorites
          </nav>
          <nav
            className={`sectrion_btn ${active === "healthy" ? "active" : ""}`}
            onClick={() => setActive("healthy")}
          >
            Healthy Boost
          </nav>
          <nav
            className={`sectrion_btn ${active === "Quick" ? "active" : ""}`}
            onClick={() => setActive("Quick")}
          >
            Quick Bites
          </nav>
          <nav
            className={`sectrion_btn ${active === "Drinks" ? "active" : ""}`}
            onClick={() => setActive("Drinks")}
          >
            Drinks
          </nav>
        </ProductDetails>
        <ProductCards>
          {theItem.map((item, index) => (
            <Cards key={index}>
              <CardsImage>
                <img src={item.image} alt="" />
              </CardsImage>
              <h4>{item.title}</h4>
              <p>₦{item.price}</p>
              <small>
                <CiClock2 /> {item.time}
              </small>
              <AddTocartOrder>
                <div className="add_cart">
                  Add to cart <MdOutlineShoppingCart className="cart" />
                </div>
                <Button
                  text="Order now"
                  className="order_btn"
                  onClick={() => setPopup("signup")}
                />
              </AddTocartOrder>
            </Cards>
          ))}
        </ProductCards>
      </ProductDisplay>
    </PopularConatiner>
  );
};

export default PopularFoods;
