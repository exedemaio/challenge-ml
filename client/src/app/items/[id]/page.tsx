"use client";
import Breadcrump from "@/components/Breadcrumb";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { getCurrencySymbol } from "@/shared/getCurrencySymbol";
import Button from "@/components/Button";

const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    picture: "",
    sold_quantity: 0,
    condition: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/items/${params.id}/api`);
        const result = await response.json();
        setData(result.item);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);
  return (
    <div className={styles.detail__container}>
      <div className={styles.detail__card}>
        <div className={styles.detail__column}>
          <Image src={data.picture} alt="Logo" width={680} height={680} />
          <span className={styles.detail__description_title}>{data.title}</span>
          <p className={styles.detail__description}>{data.description}</p>
        </div>
        <div className={styles.detail__column}>
          <span className={styles.detail__condition}>
            {data.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {data.sold_quantity} Vendidos
          </span>
          <span className={styles.detail__title}>{data.title}</span>
          <span className={styles.detail__content_price}>
            {getCurrencySymbol(data.price.currency)}{" "}
            {data.price.amount.toLocaleString("es-AR")}
            <span className={styles.detail__price_decimal}>
              {data.price.decimals ? data.price.decimals : ""}
            </span>{" "}
          </span>
          <Button title="Comprar" />
        </div>
      </div>
    </div>
  );
};

export default Page;
