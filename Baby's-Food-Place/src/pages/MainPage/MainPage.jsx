import React from "react";
import styles from "./MainPage.module.css";
import { Title } from "../../components/Title/Title";
import { AllRecipes } from "../../components/AllRecipes/AllRecipes";
import { RecipeDetailView } from "../../components/RecipeDetailView/RecipeDetailView";
import { MostPopularRecipes } from "../../components/MostPopularRecipes/MostPopularRecipes";

export const MainPage = () => {
  return (
    <div>
      <Title title="Fresh & New" />
      {/* <RecipeDetailView /> */}
      <AllRecipes />
      <MostPopularRecipes />
    </div>
  );
};
