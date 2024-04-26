"use client";
import React from "react";
import styles from "./search.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";

const Search: React.FC = () => {
  const { search, setSearch } = useSearch();
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/items?search=${search}`);
  };

  return (
    <div className={styles.search__container}>
      <div className={styles.search__container_grid}>
        <Image src="/Logo_ML.png" alt="Logo" width={53} height={36} />
        <div className={styles.search__form}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className={styles.search__form_input}
            style={{ width: "100%" }}
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button className={styles.search__form_button} onClick={handleSearch}>
            <Image src="/ic_Search.png" alt="Search" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
