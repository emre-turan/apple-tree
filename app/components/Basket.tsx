import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import BasketImg from "@/public/images/basket.svg";
import BasketFullImg from "@/public/images/fullbasket.svg";

const Basket = () => {
  const basket = useSelector((state: RootState) => state.apple.basket);
  const [showFullBasket, setShowFullBasket] = useState(false);

  useEffect(() => {
    if (basket) {
      setShowFullBasket(true);
    } else {
      setShowFullBasket(false);
    }
  }, [basket]);

  return (
    <div className="flex justify-end">
      <div className="transition-all duration-500 hover:scale-105">
        {showFullBasket ? (
          <Image
            src={BasketFullImg}
            alt="Basket with Apples"
            width={100}
            height={100}
          />
        ) : (
          <Image src={BasketImg} alt="Empty Basket" width={100} height={100} />
        )}
      </div>
    </div>
  );
};

export default Basket;
