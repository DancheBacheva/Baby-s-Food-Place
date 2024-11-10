import React from "react";
import styles from "./MainPage.module.css";
import { MostPopularRecipes } from "../../components/MostPopularRecipes/MostPopularRecipes";
import { FreshAndNew } from "../../components/FreshAndNew/FreshAndNew";

export const MainPage = () => {
  return (
    <>
      <FreshAndNew />
      <MostPopularRecipes />
    </>
  );
};
