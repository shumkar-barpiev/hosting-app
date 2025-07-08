/* eslint-disable @typescript-eslint/no-explicit-any */

import { sendContactForm } from "@/request/contact-api";

export const useMailerViewModel = () => {
  const sendMail = (
    payload: Record<string, any>,
    callback: (response: any, error: any) => void
  ) => {
    sendContactForm(payload, (response, error) => {
      callback(response, error);
    });
  };

  return {
    sendMail,
  };
};
