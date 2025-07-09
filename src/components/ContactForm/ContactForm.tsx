/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { enqueueSnackbar } from "notistack";
import { COLORS } from "@/constants/colors";
import { Controller } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { MailType } from "@/request/contact-api";
import Autocomplete from "@mui/material/Autocomplete";
import TelegramIcon from "@mui/icons-material/Telegram";
import { getMailHtml, mailHeader } from "@/utils/mail-html";
import { Button, Container, Typography } from "@mui/material";
import LoadingBackdrop from "@/components/other/LoadingBackdrop";
import { useMailerViewModel } from "@/viewModels/mailerViewModel";
import { ADDITIONAL_SERVICES_OPTIONS } from "@/constants/form-constant";
import { TARIFF_OPTIONS, ContactFormFields } from "@/constants/form-constant";

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
    const mailHead = mailHeader(data);
    const pricingCardBody = getMailHtml(MailType.TariffPlans, data);
    const additionalServiceBody =
      data.additionalServices !== ""
        ? getMailHtml(MailType.AdditionalServices, data)
        : "";

    const message = `
      <div style="padding: 10px, display: flex; flex-direction: column; justify-content: center; align-items: center;"> 
        ${mailHead}
        ${pricingCardBody}
        ${additionalServiceBody}
      </div>
      `;

    const payload = {
      email: data.email,
      message,
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
    <Box>
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
                  <Box>
                    <Autocomplete
                      options={TARIFF_OPTIONS}
                      getOptionLabel={(option) => option.label}
                      isOptionEqualToValue={(option, value) =>
                        option.value === value.value
                      }
                      value={
                        TARIFF_OPTIONS.find(
                          (opt) => opt.value === field.value
                        ) || null
                      }
                      onChange={(_, newValue) =>
                        field.onChange(newValue ? newValue.value : "")
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Тариф VPS"
                          variant="outlined"
                          required
                          fullWidth
                          size="medium"
                          sx={textFieldsStyles}
                        />
                      )}
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="additionalServices"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Autocomplete
                      options={ADDITIONAL_SERVICES_OPTIONS}
                      getOptionLabel={(option) => option.label}
                      isOptionEqualToValue={(option, value) =>
                        option.value === value.value
                      }
                      value={
                        ADDITIONAL_SERVICES_OPTIONS.find(
                          (opt) => opt.value === field.value
                        ) || null
                      }
                      onChange={(_, newValue) =>
                        field.onChange(newValue ? newValue.value : "")
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Дополнительные услуги"
                          variant="outlined"
                          fullWidth
                          size="medium"
                          sx={textFieldsStyles}
                        />
                      )}
                    />
                  </Box>
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
    </Box>
  );
};

export default ContactForm;
