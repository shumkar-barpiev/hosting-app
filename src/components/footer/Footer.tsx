"use client";

import React from "react";
import { COLORS } from "@/constants/colors";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";

const Footer: React.FC = () => {
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
      component="footer"
      sx={{
        bgcolor: COLORS.TURQUOISE_DARK,
        color: COLORS.WHITE,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "left",
            gap: 2,
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{ flexGrow: 1, alignItems: "left" }}
          >
            <Typography component="a" href="/licence" sx={linkStyles}>
              Лицензия на предоставление услуг
            </Typography>
            <Typography component="a" href="#" sx={linkStyles}>
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              top: 0,
              color: COLORS.WHITE,
              fontSize: "14px",
              height: "fit-content",
              textTransform: "uppercase",
              letterSpacing: 1,
              fontWeight: 400,
            }}
          >
            Санарип Долбоор © {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
