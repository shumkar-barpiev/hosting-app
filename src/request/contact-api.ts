/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "@/utils/http";

export enum MailType {
  AdditionalServices = "additional_services",
  TariffPlans = "tariff_plans",
  CustomPlans = "custom_plans",
}

export const sendContactForm = async (
  payload: Record<string, any>,
  callback: (response: any, error?: any) => void
) => {
  try {
    const response = await http("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const res = await response.json();
      callback(res, undefined);
    } else {
      callback(null, { status: response.status, message: response.statusText });
    }
  } catch (error: unknown) {
    callback(null, error);
  }
};
