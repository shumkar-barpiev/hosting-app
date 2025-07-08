/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "@/utils/http";

export enum MailType {
  AdditionalServices = "additional_services",
  TariffPlans = "tariff_plans",
  CustomPlans = "custom_plans",
}

export const sendContactForm = async (
  payload: Record<string, any>,
  callback: (response: any) => void
) => {
  try {
    const response = await http("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const res = await response.json();
      callback(res);
    } else {
      callback({ status: -1 });
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error: unknown) {
    console.log(error);
    callback({ status: -1 });
  }
};
