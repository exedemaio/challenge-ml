import React, { Fragment } from "react";
import styles from "./breadcrump.module.css";
import Image from "next/image";

interface BreadcrumpProps {
  items: string[];
}

const Breadcrump: React.FC<BreadcrumpProps> = ({ items }: BreadcrumpProps) => {
  return (
    <nav className={styles.breadcrumb__container}>
      {items.map((item, index) => (
        <Fragment key={index}>
          <span key={index} className={styles.breadcrumb__item}>
            {item}
          </span>
          {index !== items.length - 1 && (
            <Image src="/chevron.svg" alt="Chevron" width={6} height={8} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default Breadcrump;
