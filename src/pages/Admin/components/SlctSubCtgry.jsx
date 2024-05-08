import React, { useState } from "react";
import { LabelText } from "../../../components/General/Input";

const SlctSubCtgry = ({
  dispatch,
  pCtgry,
  pCtgryErr,
  pSbCtgry,
  pSbCtgryErr,
}) => {
  const categories = [
    {
      name: "Category 1",
      subcategories: ["Subcategory 1.1", "Subcategory 1.2", "Subcategory 1.3"],
    },
    {
      name: "Category 2",
      subcategories: ["Subcategory 2.1", "Subcategory 2.2", "Subcategory 2.3"],
    },
    {
      name: "Category 3",
      subcategories: ["Subcategory 3.1", "Subcategory 3.2", "Subcategory 3.3"],
    },
  ];

  const handleCategoryChange = (e) => {
    dispatch({ type: "pCtgryVal", payload: e.target.value });
  };

  const handleSubcategoryChange = (e) => {
    dispatch({ type: "pSbCtgryVal", payload: e.target.value });
  };

  return (
    <div className="space-y-5">
      <div>
        <LabelText
          htmlFor="pCtgry"
          text="Select a Category"
          error={pCtgryErr}
        />
        <select
          id="pCtgry"
          className={`border p-[7px] text-[15px] focus:outline-dotted focus:bg-[#F8F9FA] text-ternary w-full placeholder:text-gray-500 ${
            pCtgryErr && "text-red-600 placeholder:text-red-600 border-red-600"
          }`}
          value={pCtgry}
          onChange={handleCategoryChange}
          onClick={() =>
            pCtgryErr && dispatch({ type: "pCtgryErr", payload: "" })
          }
        >
          <option value="">Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {pCtgry && (
        <div className="">
          <LabelText
            htmlFor="pSbCtgry"
            text="Select a Subcategory"
            error={pSbCtgryErr}
          />
          <select
            id="pSbCtgry"
            className={`border p-[7px] text-[15px] focus:outline-dotted focus:bg-[#F8F9FA] text-ternary w-full placeholder:text-gray-500 ${
              pSbCtgryErr &&
              "text-red-600 placeholder:text-red-600 border-red-600"
            }`}
            value={pSbCtgry}
            onClick={() =>
              pSbCtgryErr && dispatch({ type: "pSbCtgryErr", payload: "" })
            }
            onChange={handleSubcategoryChange}
          >
            <option value="">Select a subcategory</option>
            {categories
              .find((category) => category.name === pCtgry)
              ?.subcategories.map((subcategory, index) => (
                <option key={index} value={subcategory}>
                  {subcategory}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default SlctSubCtgry;
