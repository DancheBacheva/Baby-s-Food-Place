import React from "react";
import styles from "./MyRecipesPage.module.css";
import { Title } from "../../components/Title/Title";
import { Recipes } from "../../components/Recipes/Recipes";
import { NewRecipe } from "../../components/NewRecipe/NewRecipe";

export const MyRecipesPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Title title="My Recipes" />
        <Recipes />
        <NewRecipe />
      </div>
    </>
  );
};
