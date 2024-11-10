import React, { useState } from "react";
import styles from "./FreshAndNew.module.css";
import data from "../../data/recipes.json";
import { Title } from "../Title/Title";
import { RecipeDetailView } from "../RecipeDetailView/RecipeDetailView";
import { useRecipeModal } from "../../hooks/useRecipeModal";

export const FreshAndNew = () => {
  const { isModalOpen, selectedRecipe, handleRecipeClick, closeModal } =
    useRecipeModal();

  return (
    <>
      <Title title="Fresh & New" />
      <div className={styles.mainContainer}>
        {data.slice(0, 3).map((recipe, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardUp}>
              <img
                src={`/food/${recipe.recipeImage}`}
                alt={recipe.recipeTitle}
              />
              <div className={styles.foodCategory}>{recipe.category}</div>
            </div>
            <div className={styles.cardDown}>
              <h4>{recipe.recipeTitle}</h4>
              <p>{recipe.recipeDescription}</p>
              <div className={styles.detailsContainer}>
                <div className={styles.detailsContainerLeft}>
                  <div className={styles.smallContainer}>
                    <img src="clock.png" alt="" />
                    <p>{recipe.preparationTime}min</p>
                  </div>
                  <div className={styles.smallContainer}>
                    <img src="cutlery.png" alt="" />
                    <p>{recipe.numberOfPeople} persons</p>
                  </div>
                  <div className={styles.smallContainer}>
                    <img src="star.png" alt="" />
                    <p>28</p>
                  </div>
                </div>
                <div className={styles.detailsContainerRight}>
                  <button onClick={() => handleRecipeClick(recipe.id)}>
                    &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedRecipe && (
        <RecipeDetailView recipe={selectedRecipe} closeModal={closeModal} />
      )}
    </>
  );
};
