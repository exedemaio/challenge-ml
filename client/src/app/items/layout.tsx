"use client";
import { useCategories } from "@/hooks/useCategories";
import Breadcrump from "@/components/Breadcrumb";
import styles from "./page.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { categories } = useCategories();

  return (
    <div className={styles.items__container}>
      <Breadcrump items={categories} />
      {children}
    </div>
  );
}
