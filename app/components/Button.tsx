import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { shakeTree, stopShaking, dropApples } from "../redux/applesSlice";

const Button = () => {
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
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className={`w-full sm:w-auto py-2 sm:py-3 sm:px-6 lg:py-4 lg:px-8 lg:text-lg bg-red-500 hover:bg-red-700 text-white font-bold rounded m-5 transition-colors duration-300 ease-in-out ${
          shaking ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={shaking}
      >
        {shaking ? "Shaking..." : "Shake Tree"}
      </button>
    </div>
  );
};

export default Button;
