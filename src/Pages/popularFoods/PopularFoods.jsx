import React, { useContext, useEffect, useState } from "react";
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
import {
  useGetCategoryQuery,
  useGetProductByCategoryQuery,
} from "../../features/authApi";

const PopularFoods = () => {
  const { setPopup } = useContext(AppContext);
  const [active, setActive] = useState(null);
  const { data: categories, isLoading: catLoading } = useGetCategoryQuery();
  const { data: products, isLoading: prodLoading } =
    useGetProductByCategoryQuery();

  useEffect(() => {
    if (categories && categories.length > 0 && !active) {
      setActive(categories[0]);
    }
  }, [categories, active]);

  // const objtoMap = [
  //   {
  //     name: "local",
  //     arr: LocalFoods,
  //   },
  //   {
  //     name: "healthy",
  //     arr: Healthy,
  //   },
  //   {
  //     name: "Quick",
  //     arr: QuickBites,
  //   },
  //   {
  //     name: "Drinks",
  //     arr: Drinks,
  //   },
  // ];
  // const theItem = objtoMap.find((item) => item.name === active).arr;
  return (
    <PopularConatiner>
      <p className="pick">Quick pick</p>
      <h2 className="foods">Popular Foods</h2>
      <ProductDisplay>
        <ProductDetails>
          {catLoading && <p>Loading categories...</p>}
          {categories?.data?.map((cat) => (
            <nav
              key={cat._id}
              className={`sectrion_btn ${
                active?._id === cat._id ? "active" : ""
              }`}
              onClick={() => setActive(cat)}
            >
              {cat.categoryName}
            </nav>
          ))}
        </ProductDetails>
        <ProductCards>
          {prodLoading && <p>products loading</p>}
          {products?.products?.map((item) => (
            <Cards key={item.id}>
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
