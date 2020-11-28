import React from "react";
import { TodoAppContext } from "../AppContext/AppContext";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
export const App = () => {
  return (
    <TodoAppContext>
      <Header />
      <Main />
    </TodoAppContext>
  );
};
