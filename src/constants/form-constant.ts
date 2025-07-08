export type ContactFormFields = {
  name: string;
  email: string;
  tariff: string;
  additionalServices: string;
};

export enum AdditionalServicesValues {
  Backups = "backups",
  ServerManagement = "server_management",
  AdditionalIP = "additional_ip",
}

export enum TariffValues {
  VPS_Small = "vps_small",
  VPS_Medium = "vps_medium",
  VPS_Large = "vps_large",
}

export const TARIFF_OPTIONS = [
  { value: TariffValues.VPS_Small, label: "VPS Small" },
  { value: TariffValues.VPS_Medium, label: "VPS Medium" },
  { value: TariffValues.VPS_Large, label: "VPS Large" },
];

export const ADDITIONAL_SERVICES_OPTIONS = [
  { value: AdditionalServicesValues.Backups, label: "Резервные копии" },
  {
    value: AdditionalServicesValues.ServerManagement,
    label: "Администрирование сервера",
  },
  {
    value: AdditionalServicesValues.AdditionalIP,
    label: "Дополнительный IP-адрес",
  },
];
