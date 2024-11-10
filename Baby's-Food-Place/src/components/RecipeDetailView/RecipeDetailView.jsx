import React from "react";
import styles from "./RecipeDetailView.module.css";

export const RecipeDetailView = ({ recipe, closeModal }) => {
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.detailViewContainer}>
          <div className={styles.header}>
            <h2>{recipe.recipeTitle}</h2>
            <button onClick={closeModal}>X</button>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.leftContainer}>
              <img
                src={`/food/${recipe.recipeImage}`}
                alt={recipe.recipeTitle}
              />
              <div className={styles.subtitle}>
                <h5>Best served for</h5>
                <div>{recipe.category}</div>
              </div>
              <div className={styles.shortDescription}>
                <p>{recipe.recipeDescription}</p>
              </div>
              <div className={styles.detailsSmallContainer}>
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
            </div>
            <div className={styles.rightContainer}>
              <h5>Recipe Details</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English.
                Quisque blandit mattis risus, sed tincidunt ante finibus non.
                Nullam sit amet nunc lorem. Mauris lectus erat, accumsan quis
                nisl vel, feugiat rhoncus ipsum. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. In at
                euismod leo. Fusce sed volutpat risus, fermentum feugiat enim.
                Etiam mollis ante quis nisl imperdiet, id commodo ante
                tincidunt. Duis bibendum scelerisque risus nec consectetur.
                Vivamus est elit, mollis vel malesuada non, porta id mauris.
                Quisque a vehicula lorem. Praesent in auctor quam. Etiam magna
                quam, sollicitudin id nunc eget, porttitor pretium tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
