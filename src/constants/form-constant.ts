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

export type VpsPlan = {
  name: string;
  value: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: {
    storage: string;
    ram: string;
    vcpu: string;
    speed: string;
    os: string;
  };
};

export const plans: VpsPlan[] = [
  {
    name: "VPS Small",
    value: TariffValues.VPS_Small,
    monthlyPrice: "900 сом ",
    yearlyPrice: "10.000 сом ",
    features: {
      storage: "15 GB",
      ram: "2 GB",
      vcpu: "2",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
  {
    name: "VPS Middle",
    value: TariffValues.VPS_Medium,
    monthlyPrice: "1.200 сом ",
    yearlyPrice: "14.000 сом ",
    features: {
      storage: "30 GB",
      ram: "4 GB",
      vcpu: "4",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
  {
    name: "VPS Large",
    value: TariffValues.VPS_Large,
    monthlyPrice: "1.800 сом ",
    yearlyPrice: "21.000 сом ",
    features: {
      storage: "60 GB",
      ram: "6 GB",
      vcpu: "6",
      speed: "(3.3) GHz",
      os: "LIN/WIN",
    },
  },
];

export const additionalServices = [
  {
    id: 1,
    name: "Резервные копии",
    value: AdditionalServicesValues.Backups,
    price: 700,
    priceCurrency: "сом",
    billingTypes: "разовое",
  },
  {
    id: 2,
    name: "Администрирование сервера",
    value: AdditionalServicesValues.ServerManagement,
    price: 1100,
    priceCurrency: "сом",
    billingTypes: "час",
  },
  {
    id: 3,
    name: "Дополнительный IP-адрес",
    value: AdditionalServicesValues.AdditionalIP,
    price: 500,
    priceCurrency: "сом",
    billingTypes: "месяц",
  },
];
