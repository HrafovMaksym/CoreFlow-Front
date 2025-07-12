import { ReactNode } from "react";
import styles from "./auth-styles.module.scss";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <h1>CoreFlow</h1>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}></div>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </>
  );
}
