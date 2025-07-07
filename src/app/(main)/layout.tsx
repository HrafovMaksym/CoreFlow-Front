import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className="main_container">{children}</main>
    </>
  );
}
