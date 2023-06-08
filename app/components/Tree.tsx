import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shakeTree, stopShaking, dropApples } from "../redux/applesSlice";
import { RootState } from "../redux/store";
import TreeImg from "@/public/images/tree.svg";
import Image from "next/image";

const Tree = () => {
  const dispatch = useDispatch();
  const shaking = useSelector((state: RootState) => state.apple.shaking);

  const handleClick = () => {
    dispatch(shakeTree());
    setTimeout(() => {
      dispatch(stopShaking());
      dispatch(dropApples());
    }, 3000);
  };

  return (
    <div
      className={`mx-auto mt-auto flex justify-center ${
        shaking ? "shake" : ""
      }`}
    >
      <div className="cursor-pointer transform transition-transform duration-200 hover:scale-105">
        <Image
          src={TreeImg}
          alt="apple-tree"
          width={250}
          height={250}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Tree;
