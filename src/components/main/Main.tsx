"use client";

import React from "react";
import { Box } from "@mui/material";
import PricingCards from "@/components/PricingCards/PricingCards";

const Main: React.FC = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <PricingCards />
    </Box>
  );
};

export default Main;
