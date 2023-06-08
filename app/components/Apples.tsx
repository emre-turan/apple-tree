import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import AppleImg from "@/public/images/apple.svg";
import { fillBasket } from "../redux/applesSlice";

interface FallingApple {
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

const Apples = () => {
  const dispatch = useDispatch();
  const shaking = useSelector((state: RootState) => state.apple.shaking);
  const [fallingApples, setFallingApples] = useState<FallingApple[]>([]);
  const [fallenApples, setFallenApples] = useState<FallingApple[]>([]);
  const fallingApplesRef = useRef(fallingApples);
  fallingApplesRef.current = fallingApples;

  useEffect(() => {
    if (shaking) {
      const newFallingApples = Array.from(
        { length: Math.floor(Math.random() * 6) },
        () => ({
          left: Math.random() * 100 + (window.innerWidth / 2 - 75),
          top: Math.random() * 50,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2,
          size: Math.random() * 20 + 30,
        })
      );
      setFallingApples(newFallingApples);
    } else {
      setFallenApples((prevFallenApples) =>
        prevFallenApples.concat(fallingApplesRef.current)
      );
      setFallingApples([]);

      setTimeout(() => {
        setFallenApples((prevFallenApples) => {
          if (prevFallenApples.length > 0) {
            dispatch(fillBasket());
          }
          return [];
        });
      }, 1000);
    }
  }, [shaking, dispatch]);

  return (
    <div className="mx-auto mt-auto">
      {fallingApples.map((apple, index) => (
        <div
          key={index}
          className="falling-apple"
          style={{
            left: apple.left,
            top: apple.top,
            position: "absolute",
            animation: `fall ${apple.duration}s forwards, appear ${apple.duration}s forwards`,
          }}
        >
          <Image
            src={AppleImg}
            alt="Apple"
            width={apple.size}
            height={apple.size}
          />
        </div>
      ))}
      {fallenApples.map((apple, index) => (
        <div
          key={index}
          style={{
            left: apple.left,
            top: "55%",
            position: "absolute",
          }}
        >
          <Image
            src={AppleImg}
            alt="Apple"
            width={apple.size}
            height={apple.size}
          />
        </div>
      ))}
    </div>
  );
};

export default Apples;
