import { ReactNode } from "react";

export interface Slide {
  key: string;
  content: ReactNode;
}

export interface VerticalCarouselProps {
  slides: Slide[];
  offsetRadius?: number;
  showNavigation?: boolean;
  animationConfig?: { tension: number; friction: number };
}

export interface SlideProps {
  content: ReactNode;
  offsetRadius: number;
  index: number;
  animationConfig: { tension: number; friction: number };
  moveSlide: (direction: number) => void;
}
