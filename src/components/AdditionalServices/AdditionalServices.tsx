/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";
import { COLORS } from "@/constants/colors";
import { Button, Container, Typography } from "@mui/material";
import { additionalServices } from "@/constants/form-constant";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const dividerStyles = {
  display: { xs: "none", md: "block" },
  position: "absolute",
  top: 14,
  right: 0,
  height: "calc(100% - 28px)",
  width: "2px",
  bgcolor: "#0377fc",
  opacity: 0.3,
  zIndex: 1,
};

const gridItemStyles = {
  p: 3,
  borderRadius: 3,
  position: "relative",
};

type PropsTypes = {
  params: Record<string, any>;
};

const AdditionalServices: React.FC<PropsTypes> = ({ params }) => {
  const { setValue } = params;

  return (
    <Box
      sx={{
        width: 1,
        minHeight: "40vh",
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
          ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
        </Typography>

        <Card
          sx={{
            width: 1,
            p: 3,
            mt: 6,
            borderRadius: 4,
            boxShadow: "0 4px 12px 0 rgba(44, 62, 80, 0.28)",
          }}
        >
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="stretch"
          >
            {additionalServices.map((service, index) => (
              <Grid
                key={service.id}
                size={{ xs: 12, md: 4 }}
                sx={{
                  ...gridItemStyles,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "#333333",
                    letterSpacing: 0.5,
                    fontFamily: "Roboto mono, monospace",
                  }}
                >
                  {service.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#333333",
                    letterSpacing: 0.5,
                    fontFamily: "Roboto mono, monospace",
                    mb: 2,
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      color: COLORS.TURQUOISE_DARK,
                      fontSize: "16px",
                    }}
                  >
                    {service.price} {service.priceCurrency}{" "}
                  </span>
                  / {service.billingTypes}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "4px",
                    color: COLORS.WHITE,
                    bgcolor: COLORS.TURQUOISE_DARK,
                    ":hover": { bgcolor: COLORS.TURQUOISE_LIGHT },
                    mt: "auto",
                  }}
                  onClick={() => {
                    setValue("additionalServices", service.value);
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  startIcon={<AddShoppingCartIcon fontSize="large" />}
                >
                  Заказать
                </Button>
                {index < additionalServices.length - 1 && (
                  <Box sx={dividerStyles} />
                )}
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default AdditionalServices;
