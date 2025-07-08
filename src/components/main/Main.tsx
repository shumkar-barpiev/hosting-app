"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { COLORS } from "@/constants/colors";
import Clients from "@/components/Clients/Clients";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import ContactForm from "@/components/ContactForm/ContactForm";
import CustomPlans from "@/components/CustomPlans/CustomPlans";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import PricingCards from "@/components/PricingCards/PricingCards";
import { Box, Stack, Container, Typography } from "@mui/material";
import TariffDetails from "@/components/TariffDetails/TariffDetails";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";

const Main: React.FC = () => {
  const theme = useTheme();
  const pricingRef = useRef<HTMLDivElement>(null);
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{ minHeight: { xs: "auto", md: "60vh" }, pt: { xs: 2, md: 6 } }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: { xs: 1, sm: 2, md: 3 }, gap: { xs: 4, md: 0 } }}
        >
          <Stack
            direction="column"
            sx={{
              width: { xs: "100%", md: "60%" },
              height: "100%",
              pl: { xs: 0, md: 18 },
              pr: { xs: 0, md: 2 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant={isXs ? "h4" : isMd ? "h3" : "h2"}
              textAlign={"left"}
              maxWidth={{ xs: "100%", md: "790px" }}
              sx={{
                mb: 2,
                letterSpacing: 1,
                fontWeight: 500,
                color: "#374151",
              }}
            >
              Инфраструктура VPS, которой доверяют компании
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "fit-content",
                  bgcolor: COLORS.GREEN_DARK,
                  color: COLORS.WHITE,
                  ":hover": { bgcolor: COLORS.GREEN_LIGHT },
                }}
                onClick={handleScrollToPricing}
                startIcon={<SwipeUpIcon fontSize="large" />}
              >
                Выбрать тариф
              </Button>
            </Box>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: { xs: "100%", md: "40%" }, height: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "bounce 1.5s infinite",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-20px)" },
                },
              }}
            >
              <Image
                src="/images/main-page-1.png"
                alt="main-page"
                width={380}
                height={260}
                style={{ width: "100%", maxWidth: 470, height: "auto" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "shadowScale 1.5s infinite",
                "@keyframes shadowScale": {
                  "0%, 100%": {
                    transform: "scaleX(1.1) scaleY(1)",
                    opacity: 0.7,
                  },
                  "50%": { transform: "scaleX(0.8) scaleY(1)", opacity: 1 },
                },
              }}
            >
              <Image
                src="/images/main-page-shadow-1.png"
                alt="main-page"
                width={260}
                height={50}
                style={{ width: "100%", maxWidth: 400, height: "auto" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Box ref={pricingRef}>
        <PricingCards />
      </Box>

      <CustomPlans />
      <TariffDetails />
      <AdditionalServices />
      <Clients />
      <ContactForm />
    </Box>
  );
};

export default Main;
