import { ReactNode } from "react";

import { IntlProvider } from "./intl-provider";

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return <IntlProvider>{children}</IntlProvider>;
};
