import React from "react";
import styles from "./MainPage.module.css";
import { RecipeDetailView } from "../../components/RecipeDetailView/RecipeDetailView";
import { MostPopularRecipes } from "../../components/MostPopularRecipes/MostPopularRecipes";
import { FreshAndNew } from "../../components/FreshAndNew/FreshAndNew";

export const MainPage = () => {
  return (
    <div>
      {/* <RecipeDetailView /> */}
      <FreshAndNew />
      <MostPopularRecipes />
    </div>
  );
};
