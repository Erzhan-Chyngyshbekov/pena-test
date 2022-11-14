import * as React from "react";

import ContainerMui from "@mui/material/Container";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <ContainerMui style={{ padding: 0 }}>{children}</ContainerMui>;
};
