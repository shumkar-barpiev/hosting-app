"use client";

import React from "react";
import { COLORS } from "@/constants/colors";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import Image from "next/image";

const Header: React.FC = () => {
  const theme = useTheme();

  const linkStyles = {
    color: COLORS.WHITE,
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: 400,
    width: "fit-content",
    "&:hover": { color: theme.palette.primary.main },
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: COLORS.WHITE,
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component={"a"}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: 2, sm: 0 },
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/sanarip-logo.jpg"
              alt="Logo"
              width={48}
              height={48}
              style={{ marginRight: 6 }}
              priority
            />
            <Typography
              variant="h6"
              sx={{
                color: "#657082",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: { xs: "0.8rem", sm: "1.2rem" },
              }}
            >
              Санарип Долбоор
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: COLORS.GREEN_LIGHT,
              color: COLORS.WHITE,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Связаться с нами
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
