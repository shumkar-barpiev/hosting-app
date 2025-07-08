/* eslint-disable @next/next/no-img-element */

"use client";

import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import React, { useState } from "react";
import { Slide } from "@/components/Clients/types";
import VerticalCarousel from "@/components/Clients/VerticalCarousel";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";

const Clients: React.FC = () => {
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [animationConfig] = useState(config.gentle);

  const clientImages = [
    "client4.png",
    "client2.jpg",
    "client1.png",
    "client3.png",
  ];

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  let slides: Slide[] = [];
  if (isLgUp) {
    // 3 images per slide
    for (let i = 0; i < clientImages.length; i += 3) {
      slides.push({
        key: uuidv4(),
        content: (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", gap: 12 }}
          >
            {clientImages.slice(i, i + 3).map((filename, idx) => (
              <img
                key={filename}
                src={`/clients/${filename}`}
                alt={`Client ${i + idx + 1}`}
                style={{
                  width: "auto",
                  maxWidth: "350px",
                  height: "110px",
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>
        ),
      });
    }
  } else if (isMdUp) {
    // 2 images per slide
    for (let i = 0; i < clientImages.length; i += 2) {
      slides.push({
        key: uuidv4(),
        content: (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", gap: 18 }}
          >
            {clientImages.slice(i, i + 2).map((filename, idx) => (
              <img
                key={filename}
                src={`/clients/${filename}`}
                alt={`Client ${i + idx + 1}`}
                style={{
                  width: "auto",
                  maxWidth: "250px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>
        ),
      });
    }
  } else {
    // 1 image per slide
    slides = clientImages.map((filename, i) => ({
      key: uuidv4(),
      content: (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src={`/clients/${filename}`}
            alt={`Client ${i + 1}`}
            style={{
              width: "auto",
              maxWidth: "230px",
              maxHeight: "110px",
              objectFit: "contain",
            }}
          />
        </Box>
      ),
    }));
  }

  return (
    <Box sx={{ width: 1, py: 6 }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "45vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={animationConfig}
        />
      </Container>
    </Box>
  );
};

export default Clients;
