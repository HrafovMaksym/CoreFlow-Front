import { ReactNode } from "react";
import styles from "./auth-styles.module.scss";
import ThemeSwitcher from "@/features/theme/ui/theme-switcher";
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className="flex justify-center w-full border-b border-white py-6">
        <h1 className="text-3xl text-white">CoreFlow</h1>
        <ThemeSwitcher />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}></div>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </>
  );
}
