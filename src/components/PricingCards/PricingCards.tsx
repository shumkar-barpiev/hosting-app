/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { COLORS } from "@/constants/colors";
import { plans, VpsPlan } from "@/constants/form-constant";
import { Typography, CardContent, Container } from "@mui/material";
import { Card, Box, Stack, Button, CardHeader } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
        color: COLORS.TURQUOISE_DARK,
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
    { key: "storage", label: "Storage" },
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
              color: COLORS.TURQUOISE_DARK,
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

type PropsTypes = {
  params: Record<string, any>;
};

const PricingCards: React.FC<PropsTypes> = ({ params }) => {
  const { setValue } = params;

  return (
    <Box
      sx={{
        bgcolor: "#33503E0D",
        width: 1,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 6, textTransform: "uppercase" }}
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
                width: { xs: "90%", sm: "350px" },
                borderRadius: "16px",
                border: "none",
                padding: 0,
                margin: 0,
                bgcolor: "inherit",
                transition: "box-shadow 0.3s, transform 0.3s, background 0.3s",
                ":hover": {
                  cursor: "pointer",
                  boxShadow: "0 8px 24px 0 rgba(44, 62, 80, 0.18)",
                  transform: "translateY(-4px)",
                  bgcolor: "white",
                  "& .MuiCardHeader-root": {
                    backgroundColor: COLORS.TURQUOISE_LIGHT,
                    transition: "background 0.3s",
                  },
                  "& .MuiCardHeader-title": {
                    color: COLORS.TURQUOISE_DARK,
                    transition: "color 0.3s",
                  },
                  "& .MuiButton-root": {
                    bgcolor: COLORS.TURQUOISE_LIGHT,

                    transition: "background 0.3s, color 0.3s",
                  },
                },
              }}
            >
              <CardHeader
                title={
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
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
                  backgroundColor: COLORS.TURQUOISE_DARK,
                  transition: "background 0.3s, color 0.3s",
                }}
              />
              <CardContent
                sx={{ padding: 0, textAlign: "center", flexGrow: 1 }}
              >
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
                  borderRadius: "0px",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                  height: "48px",
                  mt: "auto",
                  color: COLORS.WHITE,
                  bgcolor: COLORS.TURQUOISE_DARK,
                }}
                startIcon={<AddShoppingCartIcon fontSize="large" />}
                onClick={() => {
                  setValue("tariff", plan.value);
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ЗАКАЗАТЬ
              </Button>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PricingCards;
