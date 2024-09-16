import React from "react";
import styles from "./NewRecipe.module.css";

export const NewRecipe = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <h4>Recipe Image</h4>
        <img src="homemadePizza.png" alt="" />
        <button>UPLOAD IMAGE</button>
      </div>
      <div className={styles.detailsContainer}>
        <label htmlFor="recipeTitle">Recipe Title</label>
        <br />
        <input type="text" placeholder="Homemade Pizza" />
        <br />
        <div className={styles.detailsMiddleContainer}>
          <div>
            <label htmlFor="category">Category</label>
            <br />
            <input type="text" placeholder="Breakfast" />
          </div>
          <div>
            <label htmlFor="preparationTime">Preparation Time</label>
            <br />
            <input type="number" placeholder="45" />
          </div>

          <div>
            <label htmlFor="noPeople">No. People</label>
            <br />
            <input type="number" placeholder="4" />
          </div>
        </div>
        <label htmlFor="shortDescription">Short Description</label>
        <br />
        <input
          type="text"
          placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage"
        />
        <br />
        <button>SAVE</button>
      </div>
      <div className={styles.recipeContainer}>
        <label htmlFor="recipe">Recipe</label>
        <input
          type="text"
          placeholder="There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don’t look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn’t
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures"
        />
      </div>
    </div>
  );
};
