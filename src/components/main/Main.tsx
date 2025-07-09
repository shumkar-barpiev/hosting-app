"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { COLORS } from "@/constants/colors";
import Clients from "@/components/Clients/Clients";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import { ContactFormFields } from "@/constants/form-constant";
import ContactForm from "@/components/ContactForm/ContactForm";
import CustomPlans from "@/components/CustomPlans/CustomPlans";
import { Button } from "@mui/material";
import PricingCards from "@/components/PricingCards/PricingCards";
import { Box, Stack, Container, Typography } from "@mui/material";
import TariffDetails from "@/components/TariffDetails/TariffDetails";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";

const Main: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { handleSubmit, control, reset, setValue } = useForm<ContactFormFields>(
    {
      defaultValues: {
        name: "",
        email: "",
        tariff: "",
        additionalServices: "",
      },
    }
  );

  const params = {
    reset,
    control,
    setValue,
    handleSubmit,
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
              variant="h2"
              textAlign={"left"}
              maxWidth={{ xs: "100%", md: "790px" }}
              sx={{
                mb: 2,
                letterSpacing: 1,
                fontWeight: 500,
                color: "#374151",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  lg: "3rem",
                  xl: "3.5rem",
                },
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
                  bgcolor: COLORS.TURQUOISE_DARK,
                  color: COLORS.WHITE,
                  ":hover": { bgcolor: COLORS.TURQUOISE_LIGHT },
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
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: 420,
                  lg: 520,
                  xl: 560,
                },
                maxWidth: {
                  xs: 320,
                  sm: 400,
                  md: 420,
                  lg: 520,
                  xl: 560,
                },
                height: "auto",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-20px)" },
                },
              }}
            >
              <Image
                src="/images/web-developer-hosting.png"
                alt="main-page"
                width={600}
                height={360}
                style={{ width: "100%", height: "auto", maxWidth: "100%" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "shadowScale 1.5s infinite",
                width: {
                  xs: 220,
                  sm: 320,
                  md: 360,
                  lg: 440,
                  xl: 520,
                },
                maxWidth: {
                  xs: 220,
                  sm: 320,
                  md: 360,
                  lg: 440,
                  xl: 520,
                },
                height: "auto",
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
                width={520}
                height={40}
                style={{ width: "100%", height: "auto", maxWidth: "100%" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Box ref={pricingRef}>
        <PricingCards params={params} />
      </Box>

      <CustomPlans />
      <TariffDetails />
      <AdditionalServices params={params} />
      <Clients />
      <ContactForm params={params} />
    </Box>
  );
};

export default Main;
