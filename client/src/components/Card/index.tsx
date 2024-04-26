import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCurrencySymbol } from "../../shared/getCurrencySymbol";

interface CardProps {
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    location: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/items/${item.id}`);
  };

  return (
    <div className={styles.card__container} onClick={handleClick}>
      <Image
        className={styles.card__image}
        src={item.picture}
        alt={item.title}
        width={180}
        height={180}
      />
      <div className={styles.card__content}>
        <span className={styles.card__content_price}>
          {getCurrencySymbol(item.price.currency)}{" "}
          {item.price.amount.toLocaleString("es-AR")}
          <span className={styles.card__price_decimal}>
            {item.price.decimals ? item.price.decimals : ""}
          </span>{" "}
          {item.free_shipping && (
            <Image
              src="/ic_shipping.png"
              alt="Free shipping"
              width={18}
              height={18}
            />
          )}
        </span>
        <span className={styles.card__title}>{item.title}</span>
      </div>
      {/* TODO: Consultar por esto. */}
      <span className={styles.card__location}>{item.location}</span>
    </div>
  );
};

export default Card;
