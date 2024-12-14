import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Socio Squares</Typography>
      </Toolbar>
    </AppBar>
    <Container>{children}</Container>
  </>
);

export default Layout;