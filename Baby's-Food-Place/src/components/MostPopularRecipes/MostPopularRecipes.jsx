import React from "react";
import styles from "./MostPopularRecipes.module.css";
import data from "../../data/recipes.json";
import { Title } from "../Title/Title";

export const MostPopularRecipes = () => {
  return (
    <>
      <Title title="Most Popular Recipes" />
      <div className={styles.mainContainer}>
        {data.slice(6, 9).map((recipe, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardUp}>
              <img src={recipe.recipeImage} alt="" />
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
                  <button>&gt;&gt;</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
