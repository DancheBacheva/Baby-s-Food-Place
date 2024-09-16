import React from "react";
import styles from "./Recipes.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Recipes = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Category</th>
            <th>Created On</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Homemade Pizza</td>
            <td>
              <div>BRUNCH</div>
            </td>
            <td>22.11.2020</td>
            <td>
              <RiDeleteBin6Line />
            </td>
          </tr>
          <tr>
            <td>Sea Shpaghetti</td>
            <td>
              <div>LUNCH</div>
            </td>
            <td>13.10.2020</td>
            <td>
              <RiDeleteBin6Line />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

<table>
  <thead>
    <tr>
      <th>Recipe Name</th>
      <th>Category</th>
      <th>Created On</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Homemade Pizza</td>
      <td>
        <div>BRUNCH</div>
      </td>
      <td>22.11.2020</td>
      <td>
        <RiDeleteBin6Line />
      </td>
    </tr>
    <tr>
      <td>Sea Shpaghetti</td>
      <td>
        <div>LUNCH</div>
      </td>
      <td>13.10.2020</td>
      <td>
        <RiDeleteBin6Line />
      </td>
    </tr>
  </tbody>
</table>;
