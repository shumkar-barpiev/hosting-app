"use client";

import React from "react";
import Image from "next/image";
import { COLORS } from "@/constants/colors";
import { usePathname } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import SignpostIcon from "@mui/icons-material/Signpost";
import { Box, Container, Typography } from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: COLORS.WHITE,
        py: { xs: 2, sm: 3 },
        boxShadow: { xs: 1, sm: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component={"a"}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              mb: { xs: 1, sm: 0 },
              textDecoration: "none",
              width: { xs: "100%", sm: "auto" },
              py: { xs: 1, sm: 0 },
            }}
          >
            <Image
              src="/images/sanarip-logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              style={{ marginRight: 6, minWidth: 32 }}
              priority
            />
            <Typography
              variant="h6"
              sx={{
                color: "#657082",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                whiteSpace: "nowrap",
              }}
            >
              Санарип Долбоор
            </Typography>
          </Box>

          {pathname === "/" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "fit-content",
              }}
            >
              <IconButton
                color="primary"
                title="Связаться с нами"
                sx={{
                  bgcolor: COLORS.TURQUOISE_DARK,
                  color: COLORS.WHITE,
                  width: 44,
                  height: 44,
                  borderRadius: 4,
                  mx: "auto",
                  display: { xs: "block", sm: "none" },
                  ":hover": { color: COLORS.TURQUOISE_DARK },
                }}
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Связаться с нами"
              >
                <ConnectWithoutContactIcon fontSize="medium" />
              </IconButton>

              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{
                  letterSpacing: 1,
                  width: { sm: "fit-content" },
                  color: COLORS.WHITE,
                  textTransform: "uppercase",
                  bgcolor: COLORS.TURQUOISE_DARK,
                  py: { sm: 1 },
                  px: 3,
                  display: { xs: "none", sm: "flex" },
                  ":hover": { bgcolor: COLORS.TURQUOISE_LIGHT },
                }}
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                startIcon={<ConnectWithoutContactIcon fontSize="small" />}
              >
                Связаться с нами
              </Button>
            </Box>
          ) : (
            <>
              <IconButton
                color="primary"
                title="На главную"
                sx={{
                  bgcolor: COLORS.TURQUOISE_DARK,
                  color: COLORS.WHITE,
                  width: 44,
                  height: 44,
                  borderRadius: 4,
                  mx: "auto",
                  display: { xs: "block", sm: "none" },
                  ":hover": { color: COLORS.TURQUOISE_DARK },
                }}
                onClick={() => {
                  window.location.href = "/";
                }}
                aria-label="На главную"
              >
                <SignpostIcon fontSize="medium" />
              </IconButton>

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  letterSpacing: 1,
                  color: COLORS.TURQUOISE_DARK,
                  borderColor: COLORS.TURQUOISE_DARK,
                  textTransform: "uppercase",
                  bgcolor: COLORS.WHITE,
                  px: 2.5,
                  py: 1,
                  display: { xs: "none", sm: "flex" },
                  fontWeight: 600,
                  ":hover": {
                    bgcolor: COLORS.TURQUOISE_LIGHT,
                    borderColor: COLORS.TURQUOISE_LIGHT,
                    color: COLORS.WHITE,
                  },
                }}
                onClick={() => {
                  window.location.href = "/";
                }}
                startIcon={<SignpostIcon fontSize="small" />}
              >
                На главную
              </Button>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
