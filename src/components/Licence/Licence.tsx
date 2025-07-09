"use client";

import Image from "next/image";
import { Box, Container } from "@mui/material";

const Licence = () => (
  <Box
    sx={{
      width: 1,
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: { xs: "stretch", sm: "flex-start" },
          gap: 4,
          width: { xs: "100%", sm: "90%", md: "75%" },
          mx: "auto",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/licence1.png"
            alt="Лицензия 1"
            width={400}
            height={550}
            style={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
              borderRadius: 12,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/licence2.png"
            alt="Лицензия 2"
            width={400}
            height={550}
            style={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
              borderRadius: 12,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Licence;
