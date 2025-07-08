/* eslint-disable @typescript-eslint/no-explicit-any */

import { sendContactForm } from "@/request/contact-api";

export const useMailerViewModel = () => {
  const sendMail = (
    payload: Record<string, any>,
    callback: (response: any) => void
  ) => {
    sendContactForm(payload, (response) => {
      callback(response);
    });
  };

  return {
    sendMail,
  };
};
