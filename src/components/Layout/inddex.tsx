import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ paddingTop: 5 }}>
        {children}
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </React.Fragment>
  );
}
