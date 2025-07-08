/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { enqueueSnackbar } from "notistack";
import { COLORS } from "@/constants/colors";
import { MailType } from "@/request/contact-api";
import { Controller } from "react-hook-form";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, TextField, MenuItem } from "@mui/material";
import { Button, Container, Typography } from "@mui/material";
import LoadingBackdrop from "@/components/other/LoadingBackdrop";
import { useMailerViewModel } from "@/viewModels/mailerViewModel";
import {
  TARIFF_OPTIONS,
  ContactFormFields,
  ADDITIONAL_SERVICES_OPTIONS,
} from "@/constants/form-constant";

export const textFieldsStyles = {
  bgcolor: COLORS.WHITE,
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.TURQUOISE_DARK,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: COLORS.TURQUOISE_DARK,
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.TURQUOISE_DARK,
    },
  },
};

type PropsTypes = {
  params: {
    handleSubmit: any;
    reset: any;
    control: any;
  };
};

const ContactForm: React.FC<PropsTypes> = ({ params }) => {
  const { handleSubmit, reset, control } = params;
  const { sendMail } = useMailerViewModel();

  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: ContactFormFields) => {
    setLoading(true);
    const payload = {
      type: MailType.TariffPlans,
      email: data.email,
      message: `Контактное лицо: ${data.name}\nТариф VPS: ${data.tariff}`,
    };

    sendMail(payload, (response) => {
      setLoading(false);
      if (response.status === 0) {
        enqueueSnackbar("Ваше сообщение успешно отправлено", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Ошибка при отправке формы", { variant: "error" });
      }
      reset();
    });
  };

  return (
    <>
      <LoadingBackdrop open={loading} />
      <Box
        id="contact-form"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: 1,
          minHeight: "70vh",
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
              <Controller
                name="additionalServices"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Дополнительные услуги"
                    variant="outlined"
                    fullWidth
                    size="medium"
                    sx={textFieldsStyles}
                  >
                    {ADDITIONAL_SERVICES_OPTIONS.map((option) => (
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
                  bgcolor: COLORS.TURQUOISE_DARK,
                  color: COLORS.WHITE,
                  ":hover": { bgcolor: COLORS.TURQUOISE_LIGHT },
                }}
                startIcon={<TelegramIcon fontSize="large" />}
              >
                Отправить заявку
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
