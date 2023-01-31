import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="d-flex justify-content-center gap-1">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            className="btn btn-outline-warning"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
