import { useState } from "react";
import data from "../data/recipes.json";

export const useRecipeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipeId) => {
    const selected = data.find((recipe) => recipe.id === recipeId);
    setSelectedRecipe(selected);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return {
    isModalOpen,
    selectedRecipe,
    handleRecipeClick,
    closeModal,
  };
};
