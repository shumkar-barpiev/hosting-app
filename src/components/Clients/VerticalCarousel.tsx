import {
  Slide as SlideType,
  VerticalCarouselProps,
} from "@/components/Clients/types";
import React, { useState } from "react";
import { COLORS } from "@/constants/colors";
import Slide from "@/components/Clients/Slide";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Stack, IconButton, Typography } from "@mui/material";

const mod = (a: number, b: number) => ((a % b) + b) % b;

const arrowButtonsStyles = {
  bgcolor: COLORS.GREEN_DARK,
  color: "white",
  boxShadow: 1,
  borderRadius: 1,
  width: 28,
  height: 36,
  "&:hover": {
    color: COLORS.GREEN_DARK,
  },
};

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  slides,
  offsetRadius = 2,
  animationConfig = { tension: 120, friction: 14 },
}) => {
  const [index, setIndex] = useState(0);

  const modBySlidesLength = (index: number) => mod(index, slides.length);

  const moveSlide = (direction: number) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const clampOffsetRadius = (radius: number): number => {
    const upperBound = Math.floor((slides.length - 1) / 2);
    return Math.min(Math.max(radius, 0), upperBound);
  };

  const getPresentableSlides = (): SlideType[] => {
    const clampedRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides: SlideType[] = [];

    for (let i = -clampedRadius; i <= clampedRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{
        width: { xs: "100%", sm: "90%", md: "90%" },
        mx: "auto",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Stack
        direction="column"
        sx={{ width: "100%", height: "80%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", textTransform: "uppercase" }}
        >
          Нам доверяют
        </Typography>
        <Box
          sx={{
            width: "100%",
            minHeight: 180,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={moveSlide}
              offsetRadius={clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </Box>
      </Stack>

      <Stack
        direction="column"
        sx={{ width: "10%", height: { xs: "none", sm: "100%" } }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            visibility: "hidden",
          }}
        >
          Placeholder box
        </Box>

        <Stack
          direction={{ xs: "row", sm: "column" }}
          spacing={1}
          sx={{
            alignItems: "flex-start",
            width: "fit-content",
            zIndex: 1000,
            height: { xs: "5%", sm: "45%" },
          }}
        >
          <IconButton onClick={() => moveSlide(-1)} sx={arrowButtonsStyles}>
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => moveSlide(1)} sx={arrowButtonsStyles}>
            <ArrowDownwardIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VerticalCarousel;
