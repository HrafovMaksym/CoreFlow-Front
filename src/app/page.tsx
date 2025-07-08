import Header from "@/widgets/header/ui/header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      {t("title")} <Header />
    </div>
  );
}
