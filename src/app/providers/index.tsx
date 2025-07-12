import { ReactNode } from "react";

import { IntlProvider } from "./intl-provider";
import { ModeProvider } from "./theme-provider";
import { ReduxProvider } from "./redux-provider";

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ModeProvider>
      <ReduxProvider>
        <IntlProvider>{children}</IntlProvider>
      </ReduxProvider>
    </ModeProvider>
  );
};
