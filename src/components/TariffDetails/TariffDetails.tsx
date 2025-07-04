"use client";

import { COLORS } from "@/constants/colors";
import { Box, Typography, Container, Stack } from "@mui/material";

type TariffDetail = {
  id: number;
  content: string;
};

const details: TariffDetail[] = [
  { id: 1, content: "Безлимитный трафик" },
  { id: 2, content: "Скорость соединения до 100Mb/s" },
  { id: 3, content: "Удобная панель управления сервером от ISP" },
  { id: 4, content: "Еженедельные резервные копии вашего сервера*" },
  { id: 5, content: "Бесплатный SSL от Let's Encrypt в ISPmanager5*" },
];

const detailContentStyles = {
  color: "#333333",
  fontSize: "18px",
  letterSpacing: 1,
  fontWeight: 200,
  fontFamily: "IBM Plex Sans, sans-serif",
};

const TariffDetails = () => (
  <Box
    sx={{
      bgcolor: "#33503E0D",
      width: 1,
      minHeight: "45vh",
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
        В тарифах включено
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        width={{ xs: "100%", sm: "80%", md: "75%" }}
        mx="auto"
      >
        <Stack spacing={2}>
          {details.slice(0, 3).map((detail) => (
            <Box
              key={detail.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  color: COLORS.WHITE,
                  bgcolor: COLORS.GREEN_DARK,
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "48px",
                  fontSize: "1.2rem",
                  mr: 2,
                }}
              >
                {detail.id}
              </Box>
              <Typography sx={detailContentStyles}>{detail.content}</Typography>
            </Box>
          ))}
        </Stack>

        <Stack spacing={2}>
          {details.slice(3).map((detail) => (
            <Box
              key={detail.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  color: COLORS.WHITE,
                  bgcolor: COLORS.GREEN_DARK,
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "48px",
                  fontSize: "1.2rem",
                  mr: 2,
                }}
              >
                {detail.id}
              </Box>
              <Typography sx={detailContentStyles}>{detail.content}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default TariffDetails;
