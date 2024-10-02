import React from "react";
import styles from "./MainPage.module.css";
import { Title } from "../../components/Title/Title";
import { AllRecipes } from "../../components/AllRecipes/AllRecipes";
import { RecipeDetailView } from "../../components/RecipeDetailView/RecipeDetailView";

export const MainPage = () => {
  return (
    <div>
      <Title title="Fresh & New" />
      {/* <RecipeDetailView /> */}
      <AllRecipes />
      <Title title="Most Popular Recipes" />
    </div>
  );
};
