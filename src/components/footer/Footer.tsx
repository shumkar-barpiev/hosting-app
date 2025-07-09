"use client";

import React from "react";
import { COLORS } from "@/constants/colors";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();

  const linkStyles = {
    color: COLORS.WHITE,
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: 400,
    width: "fit-content",
    "&:hover": { color: theme.palette.primary.main },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: COLORS.TURQUOISE_DARK,
        color: COLORS.WHITE,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "left",
            gap: 2,
          }}
        >
          <Stack direction={"column"} spacing={2} sx={{ width: "fit-content" }}>
            <Typography component="a" href="/licence" sx={linkStyles}>
              Лицензия на предоставление услуг
            </Typography>
            <Typography component="a" href="#" sx={linkStyles}>
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </Typography>
          </Stack>

          <Stack direction={"column"} spacing={2} sx={{ width: "fit-content" }}>
            <Typography
              sx={{
                ...linkStyles,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="span" sx={{ fontWeight: 600 }}>
                Тел.:
              </Box>
              <a
                href="tel:+996708887120"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +996 708 887 120
              </a>
            </Typography>
            <Typography
              sx={{
                ...linkStyles,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="span" sx={{ fontWeight: 600 }}>
                Email:
              </Box>
              <a
                href="mailto:sanaripdolboor@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                sanaripdolboor@gmail.com
              </a>
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <a
                href="https://www.instagram.com/sanaripdolboor/?igsh=MTdldXNxMzZtaHRzNg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="#fff"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M16.5 7.5C16.7761 7.5 17 7.72386 17 8C17 8.27614 16.7761 8.5 16.5 8.5C16.2239 8.5 16 8.27614 16 8C16 7.72386 16.2239 7.5 16.5 7.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 9.5C10.067 9.5 8.5 11.067 8.5 13C8.5 14.933 10.067 16.5 12 16.5C13.933 16.5 15.5 14.933 15.5 13C15.5 11.067 13.933 9.5 12 9.5ZM12 15.5C10.8954 15.5 10 14.6046 10 13.5C10 12.3954 10.8954 11.5 12 11.5C13.1046 11.5 14 12.3954 14 13.5C14 14.6046 13.1046 15.5 12 15.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.75 4C5.67893 4 4 5.67893 4 7.75V16.25C4 18.3211 5.67893 20 7.75 20H16.25C18.3211 20 20 18.3211 20 16.25V7.75C20 5.67893 18.3211 4 16.25 4H7.75ZM18.5 16.25C18.5 17.2165 17.4665 18.25 16.25 18.25H7.75C6.5335 18.25 5.5 17.2165 5.5 16.25V7.75C5.5 6.7835 6.5335 5.75 7.75 5.75H16.25C17.4665 5.75 18.5 6.7835 18.5 7.75V16.25Z"
                    fill="currentColor"
                  />
                </svg>
                <span style={{ marginLeft: 6 }}>Следуй за нами</span>
              </a>
            </Box>
          </Stack>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            color: COLORS.WHITE,
            fontSize: "14px",

            textTransform: "uppercase",
            textAlign: "center",
            letterSpacing: 1,
            fontWeight: 400,
          }}
        >
          Санарип Долбоор © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
