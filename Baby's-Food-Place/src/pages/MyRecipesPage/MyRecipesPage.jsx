import React, { useState } from "react";
import styles from "./MyRecipesPage.module.css";
import { Title } from "../../components/Title/Title";
import { MyRecipes } from "../../components/MyRecipes/MyRecipes";
import { NewRecipe } from "../../components/NewRecipe/NewRecipe";
import { IoAddSharp, IoArrowUndoSharp } from "react-icons/io5";

export const MyRecipesPage = () => {
  const [showNewRecipe, setShowNewRecipe] = useState(false);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headerMyrecipes}>
          <Title title="My Recipes" />
          {!showNewRecipe ? (
            <button
              className={styles.addButton}
              onClick={() => {
                setShowNewRecipe(true);
              }}
            >
              <IoAddSharp />
            </button>
          ) : (
            <button
              className={styles.backButton}
              onClick={() => {
                setShowNewRecipe(false);
              }}
            >
              <IoArrowUndoSharp />
            </button>
          )}
        </div>
        {showNewRecipe ? <NewRecipe /> : <MyRecipes />}
      </div>
    </>
  );
};
