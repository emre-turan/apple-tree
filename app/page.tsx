"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Apples from "./components/Apples";
import Tree from "./components/Tree";
import Basket from "./components/Basket";
import Button from "./components/Button";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-green-400 via-green-100 to-sky-100 p-10 m-10 shadow-2xl rounded-xl">
      <Provider store={store}>
        <Tree />
        <Apples />
        <Basket />
        <Button />
      </Provider>
    </div>
  );
};

export default Home;
