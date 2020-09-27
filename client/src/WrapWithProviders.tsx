import React, { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

import { theme, ThemeProvider } from "./util";

export const WrapWithProviders = (
  {
    initialEntries = ["/"],
  }: {
    initialEntries?: string[];
  } = {
    initialEntries: ["/"],
  }
) => ({ children }: { children: ReactElement }) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};
