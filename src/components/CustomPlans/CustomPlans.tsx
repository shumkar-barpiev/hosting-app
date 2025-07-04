"use client";

import React from "react";
import Slider from "@mui/material/Slider";
import { COLORS } from "@/constants/colors";
import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { Box, Checkbox, Stack, Button, Typography } from "@mui/material";
import { Card, Container, FormControlLabel, TextField } from "@mui/material";

const PrettoSlider = styled(Slider)({
  color: COLORS.GREEN_DARK,
  height: 8,
  "& .MuiSlider-track": {
    backgroundColor: COLORS.GREEN_DARK,
    border: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: COLORS.WHITE,
    opacity: 1,
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: COLORS.GREEN_DARK,
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
      backgroundColor: COLORS.GREEN_DARK,
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
  storage: number;
  email: string;
  accept: boolean;
};

const CustomPlans = () => {
  const { handleSubmit, control, watch } = useForm<CustomPlanForm>({
    defaultValues: {
      cpu: 2,
      ram: 2,
      storage: 25,
      email: "",
      accept: false,
    },
  });

  const onSubmit = (data: CustomPlanForm) => {
    console.log("Submitted Data:", data);
    // alert(`CPU: ${data.cpu} vCPU\nRAM: ${data.ram} GB\nSSD: ${data.storage} GB`);
  };

  const cpu = watch("cpu");
  const ram = watch("ram");
  const storage = watch("storage");

  const headerTextStyle = { textAlign: "center", textTransform: "uppercase" };

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ pb: 6, pt: 3 }}>
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
              mt: 3,
              boxShadow: "0 4px 12px 0 rgba(44, 62, 80, 0.28)",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
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
                          sx={{ bgcolor: "#E8E8E8", color: COLORS.WHITE }}
                          fullWidth
                        />
                      )}
                    />
                    <Stack direction={"row"} sx={{ width: 1 }}>
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
                          width: "70%",
                          bgcolor: COLORS.GREEN_DARK,
                          color: COLORS.WHITE,
                        }}
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
  );
};

export default CustomPlans;
