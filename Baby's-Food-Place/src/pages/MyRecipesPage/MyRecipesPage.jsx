import React from "react";
import styles from "./MyRecipesPage.module.css";
import { Title } from "../../components/Title/Title";
import { MyRecipes } from "../../components/MyRecipes/MyRecipes";
import { NewRecipe } from "../../components/NewRecipe/NewRecipe";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";

export const MyRecipesPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Title title="My Recipes" />
        <button className={styles.addButton}>
          <IoMdAdd />
        </button>
        <button className={styles.backButton}>
          <TiArrowBackOutline />
        </button>
        <MyRecipes />
        <NewRecipe />
      </div>
    </>
  );
};
