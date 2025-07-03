"use client";

import {
  Card,
  Box,
  Stack,
  Button,
  CardHeader,
  Typography,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";
import { COLORS } from "@/constants/colors";

type VpsPlan = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: {
    ssd: string;
    ram: string;
    vcpu: string;
    speed: string;
    os: string;
  };
};

const plans: VpsPlan[] = [
  {
    name: "VPS Small",
    monthlyPrice: "900 сом ",
    yearlyPrice: "10.000 сом ",
    features: {
      ssd: "15 GB",
      ram: "2 GB",
      vcpu: "2",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
  {
    name: "VPS Middle",
    monthlyPrice: "1.200 сом ",
    yearlyPrice: "14.000 сом ",
    features: {
      ssd: "30 GB",
      ram: "4 GB",
      vcpu: "4",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
  {
    name: "VPS Large",
    monthlyPrice: "1.800 сом ",
    yearlyPrice: "21.000 сом ",
    features: {
      ssd: "60 GB",
      ram: "6 GB",
      vcpu: "6",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
];

const priceBlock = (price: string, period: string) => (
  <Stack
    direction="row"
    spacing={1}
    justifyContent="center"
    alignItems="flex-end"
    sx={{ marginBottom: "4px" }}
  >
    <span
      style={{
        fontWeight: "bold",
        color: COLORS.GREEN_DARK,
        fontSize: "16px",
      }}
    >
      {price}
    </span>
    <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
      {period}
    </Typography>
  </Stack>
);

const featureList = (features: VpsPlan["features"]) => {
  const featureLabels: { key: keyof VpsPlan["features"]; label: string }[] = [
    { key: "ssd", label: "SSD" },
    { key: "ram", label: "RAM" },
    { key: "vcpu", label: "vCPU" },
    { key: "speed", label: "" },
    { key: "os", label: "OS" },
  ];
  return (
    <Box sx={{ marginBottom: "16px" }}>
      {featureLabels.map(({ key, label }) => (
        <Typography
          key={key}
          sx={{ fontWeight: "bold", fontSize: "13px", mb: 2 }}
        >
          {label && `${label} `}
          <span
            style={{
              fontWeight: "bold",
              color: COLORS.GREEN_DARK,
              marginLeft: label ? "4px" : 0,
            }}
          >
            {features[key]}
          </span>
        </Typography>
      ))}
    </Box>
  );
};

const PricingCards = () => (
  <Box>
    <Typography
      variant="h5"
      sx={{ textAlign: "center", mb: 2, textTransform: "uppercase" }}
    >
      тарифы vps
    </Typography>
    <Box
      sx={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {plans.map((plan) => (
        <Card
          key={plan.name}
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "300px",
            borderRadius: "16px",
            border: "none",
            padding: 0,
            margin: 0,
            ":hover": {
              cursor: "pointer",
              boxShadow: "0 8px 24px 0 rgba(44, 62, 80, 0.18)",
              transform: "translateY(-4px)",
              transition: "box-shadow 0.3s, transform 0.3s",
            },
          }}
        >
          <CardHeader
            title={
              <Typography
                sx={{ fontSize: "18px", fontWeight: 500, textAlign: "center" }}
              >
                {plan.name}
              </Typography>
            }
            sx={{
              fontSize: "14px",
              padding: "8px 0",
              fontWeight: "bold",
              textAlign: "center",
              color: COLORS.WHITE,
              backgroundColor: COLORS.GREEN_LIGHT,
            }}
          />
          <CardContent sx={{ padding: 0, textAlign: "center", flexGrow: 1 }}>
            <Container sx={{ py: 2 }}>
              {priceBlock(plan.monthlyPrice, "/ месяц")}
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                или
              </Typography>
              {priceBlock(plan.yearlyPrice, "/ год")}
              {featureList(plan.features)}
            </Container>
          </CardContent>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: COLORS.GREEN_DARK,
              borderRadius: "0px",
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
              height: "48px",
              color: "#fff",
              mt: "auto", // ensures button stays at the bottom
              "&:hover": {
                backgroundColor: COLORS.GREEN_LIGHT,
              },
            }}
          >
            ЗАКАЗАТЬ
          </Button>
        </Card>
      ))}
    </Box>
  </Box>
);

export default PricingCards;
