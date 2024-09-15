import React from "react";
import styles from "./MainPage.module.css";
import { Title } from "../../components/Title/Title";
import { FreshAndNew } from "../../components/Fresh&New/FreshAndNew";

export const MainPage = () => {
  return (
    <div>
      <Title title="Fresh & New" />
      <FreshAndNew />
      <Title title="Most Popular Recipes" />
    </div>
  );
};
