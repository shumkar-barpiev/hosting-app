"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { COLORS } from "@/constants/colors";
import { useForm, Controller } from "react-hook-form";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, TextField, MenuItem } from "@mui/material";
import { Button, Container, Typography } from "@mui/material";

type ContactFormFields = {
  name: string;
  email: string;
  tariff: string;
};

const TARIFF_OPTIONS = [
  { value: "vps_small", label: "VPS Small" },
  { value: "vps_medium", label: "VPS Medium" },
  { value: "vps_large", label: "VPS Large" },
];

export const textFieldsStyles = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.GREEN_DARK,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: COLORS.GREEN_DARK,
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.GREEN_DARK,
    },
  },
};

const ContactForm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ContactFormFields>({
    defaultValues: {
      name: "",
      email: "",
      tariff: "vps_small",
    },
  });

  const onSubmit = (data: ContactFormFields) => {
    alert(
      `Name: ${data.name}\nEmail: ${data.email}\nTariff: ${TARIFF_OPTIONS.find((t) => t.value === data.tariff)?.label}`
    );
    reset();
  };

  return (
    <Box
      id="contact-form"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: 1,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#33503E0D",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 1, textTransform: "uppercase" }}
        >
          ФОРМА СВЯЗИ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#4B5563",
            fontSize: "1rem",
            letterSpacing: 1,
            fontFamily: "IBM Plex Sans, sans-serif",
          }}
        >
          Оставьте заявку и получите персональное предложение
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            width: { xs: "100%", sm: "70%", md: "60%" },
            mx: "auto",
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Контактное лицо"
                  placeholder="Введите ваше имя"
                  variant="outlined"
                  required
                  fullWidth
                  size="medium"
                  sx={textFieldsStyles}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="E-mail"
                  placeholder="email@company.com"
                  variant="outlined"
                  required
                  fullWidth
                  size="medium"
                  sx={textFieldsStyles}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="tariff"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Тариф VPS"
                  variant="outlined"
                  required
                  fullWidth
                  size="medium"
                  sx={textFieldsStyles}
                >
                  {TARIFF_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                height: 54,
                bgcolor: COLORS.GREEN_DARK,
                color: COLORS.WHITE,
                ":hover": { bgcolor: COLORS.GREEN_LIGHT },
              }}
              startIcon={<TelegramIcon fontSize="large" />}
            >
              Отправить заявку
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
