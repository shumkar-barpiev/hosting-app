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

const IdBox = (id: number) => {
  return (
    <Box
      sx={{
        minWidth: 48,
        width: 48,
        height: 48,
        color: COLORS.WHITE,
        bgcolor: COLORS.TURQUOISE_DARK,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        mr: { xs: 1, sm: 2 },
      }}
    >
      {id}
    </Box>
  );
};

const TariffDetails = () => (
  <Box
    sx={{
      bgcolor: "#33503E0D",
      width: 1,
      minHeight: "70vh",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: { xs: "stretch", sm: "flex-start" },
          gap: 2,
          width: { xs: "100%", sm: "90%", md: "75%" },
          mx: "auto",
        }}
      >
        <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: 260, md: 320 } }}>
          <Stack spacing={2}>
            {details.slice(0, 3).map((detail) => (
              <Box
                key={detail.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mb: { xs: 2, sm: 0 },
                }}
              >
                {IdBox(detail.id)}
                <Typography
                  sx={{
                    ...detailContentStyles,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    wordBreak: "break-word",
                  }}
                >
                  {detail.content}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", sm: 260, md: 320 },
          }}
        >
          <Stack spacing={2}>
            {details.slice(3).map((detail) => (
              <Box
                key={detail.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mb: { xs: 2, sm: 0 },
                }}
              >
                {IdBox(detail.id)}
                <Typography
                  sx={{
                    ...detailContentStyles,
                    fontSize: { xs: "16px", sm: "18px" },
                  }}
                >
                  {detail.content}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default TariffDetails;
