"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { COLORS } from "@/constants/colors";
import CustomPlans from "@/components/CustomPlans/CustomPlans";
import PricingCards from "@/components/PricingCards/PricingCards";
import TariffDetails from "@/components/TariffDetails/TariffDetails";
import { Box, Stack, Container, Typography, Button } from "@mui/material";

const Main: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ height: "60vh", pt: 6 }}>
        <Stack direction={"row"} justifyContent={"space-between"} sx={{ p: 3 }}>
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "100%", pl: 18 }}
          >
            <Typography
              variant="h3"
              textAlign={"left"}
              maxWidth={"550px"}
              sx={{
                mb: 2,
                letterSpacing: 1,
                fontWeight: 500,
                color: "#374151",
              }}
            >
              Инфраструктура VPS, которой доверяют компании
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: COLORS.GREEN_LIGHT,
                color: COLORS.WHITE,
                ":hover": { bgcolor: COLORS.GREEN_DARK },
              }}
              onClick={handleScrollToPricing}
            >
              Выбрать тариф
            </Button>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{ width: "100%", height: "100%" }}
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
                width={470}
                height={340}
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
                width={400}
                height={70}
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
    </Box>
  );
};

export default Main;
