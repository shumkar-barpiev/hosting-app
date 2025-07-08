import React from "react";
import { Box, Paper } from "@mui/material";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { SlideProps } from "@/components/Clients/types";

const AnimatedBox = animated(Box);

const Slide: React.FC<SlideProps> = ({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
}) => {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  let translateY = -50;
  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));

  if (offsetRadius !== 0) {
    if (index === 0) translateY = 0;
    else if (index === totalPresentables - 1) translateY = -100;
  }

  const bind = useDrag(
    (state) => {
      const {
        down,
        movement: [, my],
        tap,
      } = state;

      if (offsetFromMiddle === 0 && down) {
        const newTranslateY = translateY + my / (offsetRadius + 1);
        if (newTranslateY > -40) moveSlide(-1);
        if (newTranslateY < -100) moveSlide(1);
      }

      if (tap && offsetFromMiddle !== 0) {
        moveSlide(offsetFromMiddle);
      }
    },
    {
      pointer: { touch: true },
    }
  );

  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const style = useSpring({
    to: {
      transform: `translateY(${translateY}%) scale(${distanceFactor})`,
      top: `${offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius}%`,
      opacity: distanceFactor * distanceFactor,
    },
    config: animationConfig,
  });

  return (
    <AnimatedBox
      sx={{
        position: "absolute",
        width: "100%",
        top: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "50% 50%",
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
        touchAction: "none",
      }}
      style={style}
      {...bind()}
    >
      <Paper
        sx={{
          // bgcolor: "red",
          position: "relative",
          maxWidth: "90%",
          minWidth: "30%",
          width: "100vw",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "50% 50%",
          border: "none",
          boxShadow: "none",
          p: 4,
          cursor: "grab",
          "&:active": {
            cursor: "grabbing",
          },
        }}
      >
        {content}
      </Paper>
    </AnimatedBox>
  );
};

export default Slide;
