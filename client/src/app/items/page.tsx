"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";
import { useCategories } from "@/hooks/useCategories";

const Page = () => {
  const { setCategories } = useCategories();
  const [data, setData] = useState([]);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/items/api?search=${search}`);
        const result = await response.json();
        setData(result.items);
        setCategories(result.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search, setCategories]);

  return (
    <div className={styles.items__container}>
      <div className={styles.items__list}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Card item={item} />
            {index !== data.length - 1 && (
              <hr className={styles.items__separator} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
