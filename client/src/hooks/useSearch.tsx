"use client";
import { useSearchParams } from "next/navigation";
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
} from "react";

const searchContext = createContext({});

export function SearchProvider({ children }: { children: ReactNode }) {
  const search = useSearchProvider();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(searchContext);
};

const useSearchProvider = () => {
  const params = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchParam = params.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, []);

  return {
    search,
    setSearch,
  };
};
