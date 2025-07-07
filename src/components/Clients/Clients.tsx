"use client";

import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Box,
  IconButton,
  Typography,
  Fade,
  Container,
  Stack,
} from "@mui/material";
import { COLORS } from "@/constants/colors";

const clients = [
  { id: 1, logo: "/clients/kato-logo.png" },
  { id: 2, logo: "/clients/og-logo.jpg" },
  { id: 3, logo: "/clients/PIb-img.png" },
  { id: 4, logo: "/clients/vsemirnyi.png" },
];

const arrowButtonsStyles = {
  bgcolor: COLORS.GREEN_DARK,
  color: "white",
  boxShadow: 1,
  borderRadius: 1,
  width: 32,
  "&:hover": {
    color: COLORS.GREEN_DARK,
  },
};

const ITEMS_PER_PAGE = 3;

const Clients: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const visibleClients = clients.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ width: 1, py: 6, bgcolor: "#f8fafc", minHeight: "50vh" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 1, textTransform: "uppercase" }}
        >
          Нам доверяют
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, px: 12 }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "90%", lg: "80%" },
            }}
          >
            <Fade key={page} in timeout={2000}>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", lg: "row" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {visibleClients.map((client) => (
                  <Box
                    key={client.id}
                    component="img"
                    src={client.logo}
                    alt={client.id.toString()}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 2,
                      p: 2,
                      width: { xs: "90%", sm: 300, md: 420, lg: 270 },
                      height: { xs: 100, sm: 120, md: 140, lg: 180 },
                      objectFit: "contain",
                      mb: 1,
                      mx: "auto",
                    }}
                  />
                ))}
              </Box>
            </Fade>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "10%", lg: "3%" },
              height: 240,
            }}
          >
            <IconButton
              onClick={handlePrev}
              disabled={page === 0}
              sx={arrowButtonsStyles}
            >
              <ArrowUpwardIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={page >= totalPages - 1}
              sx={arrowButtonsStyles}
            >
              <ArrowDownwardIcon />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Clients;
