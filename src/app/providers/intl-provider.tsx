import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export const IntlProvider = ({ children }: { children: ReactNode }) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};
