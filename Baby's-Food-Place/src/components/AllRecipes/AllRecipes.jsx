import React, { useState } from "react";
import styles from "./AllRecipes.module.css";
import data from "../../data/recipes.json";
import { useParams } from "react-router-dom";
import { RecipeDetailView } from "../RecipeDetailView/RecipeDetailView";
import { useRecipeModal } from "../../hooks/useRecipeModal";

export const AllRecipes = () => {
  const { type } = useParams();
  const { isModalOpen, selectedRecipe, handleRecipeClick, closeModal } =
    useRecipeModal();

  const filteredRecipes = data.filter(
    (recipe) => recipe.category.toLowerCase() === type.toLowerCase()
  );

  return (
    <>
      <div className={styles.mainContainer}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, i) => (
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
                      <img src="/clock.png" alt="" />
                      <p>{recipe.preparationTime}min</p>
                    </div>
                    <div className={styles.smallContainer}>
                      <img src="/cutlery.png" alt="" />
                      <p>{recipe.numberOfPeople} persons</p>
                    </div>
                    <div className={styles.smallContainer}>
                      <img src="/star.png" alt="" />
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
          ))
        ) : (
          <p>No recipes found for this category.</p>
        )}
      </div>
      {isModalOpen && selectedRecipe && (
        <RecipeDetailView recipe={selectedRecipe} closeModal={closeModal} />
      )}
    </>
  );
};
