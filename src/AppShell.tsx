import type { ReactNode } from "react";
import type { i18n as I18nInstance } from "i18next";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";

type AppShellProps = {
  children: ReactNode;
  i18n: I18nInstance;
  helmetContext?: Record<string, unknown>;
};

const AppShell = ({ children, i18n, helmetContext }: AppShellProps) => {
  return (
    <HelmetProvider context={helmetContext}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </HelmetProvider>
  );
};

export default AppShell;
