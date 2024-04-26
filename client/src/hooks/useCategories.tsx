"use client";
import React, { useState, useContext, createContext, ReactNode } from "react";

const categoriesContext = createContext({});

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const categories = useCategoriesProvider();
  return (
    <categoriesContext.Provider value={categories}>
      {children}
    </categoriesContext.Provider>
  );
}

export const useCategories = () => {
  return useContext(categoriesContext);
};

const useCategoriesProvider = () => {
  const [categories, setCategories] = useState([""]);

  return {
    categories,
    setCategories,
  };
};
