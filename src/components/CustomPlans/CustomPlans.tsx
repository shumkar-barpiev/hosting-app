"use client";

import React from "react";
import Slider from "@mui/material/Slider";
import { enqueueSnackbar } from "notistack";
import { COLORS } from "@/constants/colors";
import { styled } from "@mui/material/styles";
import { MailType } from "@/request/contact-api";
import { useForm, Controller } from "react-hook-form";
import TelegramIcon from "@mui/icons-material/Telegram";
import { getMailHtml, mailHeader } from "@/utils/mail-html";
import LoadingBackdrop from "@/components/other/LoadingBackdrop";
import { useMailerViewModel } from "@/viewModels/mailerViewModel";
import { textFieldsStyles } from "@/components/ContactForm/ContactForm";
import { Box, Checkbox, Stack, Button, Typography } from "@mui/material";
import { Card, Container, FormControlLabel, TextField } from "@mui/material";

const PrettoSlider = styled(Slider)({
  color: COLORS.TURQUOISE_DARK,
  height: 8,
  "& .MuiSlider-track": {
    backgroundColor: COLORS.TURQUOISE_DARK,
    border: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: COLORS.WHITE,
    opacity: 1,
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: COLORS.TURQUOISE_DARK,
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
      backgroundColor: COLORS.TURQUOISE_DARK,
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
});

type CustomPlanForm = {
  cpu: number;
  ram: number;
  email: string;
  storage: number;
  accept: boolean;
};

const CustomPlans = () => {
  const { handleSubmit, control, watch, reset } = useForm<CustomPlanForm>({
    defaultValues: {
      cpu: 256,
      ram: 512,
      storage: 1000,
      email: "",
      accept: false,
    },
  });

  const { sendMail } = useMailerViewModel();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: CustomPlanForm) => {
    setLoading(true);
    const mailHead = mailHeader(data);
    const customPlansBody = getMailHtml(MailType.CustomPlans, {
      customRequestData: data,
    });

    const message = `
      <div style="padding: 10px, display: flex; flex-direction: column; justify-content: center; align-items: center;"> 
        ${mailHead}
        ${customPlansBody}
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

  const cpu = watch("cpu");
  const ram = watch("ram");
  const storage = watch("storage");

  const headerTextStyle = { textAlign: "center", textTransform: "uppercase" };

  return (
    <Box>
      <LoadingBackdrop open={loading} />
      <Box
        sx={{
          width: 1,
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h5" sx={headerTextStyle}>
            НЕ НАШЛИ ПОДХОДЯЩЕГО ТАРИФА?
          </Typography>
          <Typography variant="h5" sx={headerTextStyle}>
            СКОНФИГУРИРУЙТЕ СВОЙ
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Card
              sx={{
                width: "90%",
                p: 3,
                mt: 6,
                borderRadius: 4,
                boxShadow: "0 4px 12px 0 rgba(44, 62, 80, 0.28)",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  sx={{ alignItems: "center", justifyContent: "space-between" }}
                  spacing={4}
                >
                  <Box sx={{ width: 1 }}>
                    <Stack
                      sx={{ width: "100%" }}
                      direction={{ xs: "column" }}
                      spacing={4}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ width: 1 }}
                        spacing={3}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={100}
                        >
                          CPU
                        </Typography>
                        <Controller
                          name="cpu"
                          control={control}
                          render={({ field }) => (
                            <PrettoSlider
                              {...field}
                              valueLabelDisplay="auto"
                              min={2}
                              max={256}
                              step={null}
                              marks={[
                                { value: 2, label: "" },
                                { value: 4, label: "" },
                                { value: 8, label: "" },
                                { value: 16, label: "" },
                                { value: 32, label: "" },
                                { value: 64, label: "" },
                                { value: 128, label: "" },
                                { value: 256, label: "" },
                              ]}
                            />
                          )}
                        />
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={200}
                        >
                          <span style={{ fontWeight: "bold" }}>{cpu} </span>
                          (vCPU)
                        </Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ width: 1 }}
                        spacing={3}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={100}
                        >
                          RAM
                        </Typography>
                        <Controller
                          name="ram"
                          control={control}
                          render={({ field }) => (
                            <PrettoSlider
                              {...field}
                              valueLabelDisplay="auto"
                              min={2}
                              max={512}
                              step={null}
                              marks={[
                                { value: 2, label: "" },
                                { value: 4, label: "" },
                                { value: 8, label: "" },
                                { value: 16, label: "" },
                                { value: 32, label: "" },
                                { value: 64, label: "" },
                                { value: 128, label: "" },
                                { value: 256, label: "" },
                                { value: 512, label: "" },
                              ]}
                            />
                          )}
                        />
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={200}
                        >
                          <span style={{ fontWeight: "bold" }}>{ram} </span>
                          (GB)
                        </Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ width: 1 }}
                        spacing={3}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={100}
                        >
                          Storage
                        </Typography>
                        <Controller
                          name="storage"
                          control={control}
                          render={({ field }) => (
                            <PrettoSlider
                              {...field}
                              valueLabelDisplay="auto"
                              min={25}
                              max={1000}
                              step={5}
                            />
                          )}
                        />
                        <Typography
                          variant="body1"
                          whiteSpace={"nowrap"}
                          width={200}
                        >
                          <span style={{ fontWeight: "bold" }}>{storage} </span>
                          (GB)
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box sx={{ width: 1 }}>
                    <Stack spacing={2}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            type="email"
                            placeholder="E-mail"
                            required={true}
                            sx={{
                              ...textFieldsStyles,
                              bgcolor: "#E8E8E8",
                              color: COLORS.WHITE,
                            }}
                            fullWidth
                          />
                        )}
                      />
                      <Stack
                        direction={{ xs: "column", lg: "row" }}
                        sx={{ width: 1 }}
                        gap={2}
                      >
                        <Controller
                          name="accept"
                          control={control}
                          render={({ field }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  {...field}
                                  checked={!!field.value}
                                  color="success"
                                  required={true}
                                />
                              }
                              label="Согласие на обработку персональных данных"
                            />
                          )}
                        />

                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            whiteSpace: "nowrap",
                            width: { xs: "100%", lg: "70%" },
                            bgcolor: COLORS.TURQUOISE_DARK,
                            color: COLORS.WHITE,
                            ":hover": { bgcolor: COLORS.TURQUOISE_LIGHT },
                          }}
                          startIcon={<TelegramIcon fontSize="large" />}
                        >
                          Отправить заявку
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </form>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CustomPlans;
