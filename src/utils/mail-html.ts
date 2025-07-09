/* eslint-disable @typescript-eslint/no-explicit-any */
import { MailType } from "@/request/contact-api";
import { plans, additionalServices } from "@/constants/form-constant";

type MailPayload = {
  name?: string;
  email?: string;
  tariff?: string;
  customRequest?: string;
  additionalServices?: string;
  customRequestData?: Record<string, any>;
};

export const mailHeader = (payload: MailPayload) => {
  return `
    <p><strong>Контактное лицо:</strong> ${payload.name || payload.email || ""}</p>
    <p><strong>Email:</strong> ${payload.email || ""}</p>
  `;
};

export function getMailHtml(type: MailType, payload: MailPayload): string {
  switch (type) {
    case MailType.TariffPlans:
      const chosenTariff = plans.find((plan) => plan.value === payload.tariff);
      return `
        <h2 style="padding: 16px 8px; text-align: center;">Заявка на тариф VPS</h2>
      
        <div style="border-radius:16px;border:1px solid #e0e0e0;overflow:hidden;max-width:350px;font-family:'IBM Plex Sans',Arial,sans-serif;background:#fff;margin:0 auto;">
          <div style="background: #1eaea7; color: #fff; padding: 12px 0; text-align: center; font-size: 18px; font-weight: 500;">
            ${chosenTariff.name ?? ""}
          </div>
          <div style="padding: 24px 16px; text-align: center;">
            <div style="font-weight:bold; color:#1eaea7; font-size:18px; margin-bottom:4px;">
              ${chosenTariff.monthlyPrice ?? ""}
              <span style="font-size:13px; color:#374151; font-weight:normal;">/ месяц</span>
            </div>
            <div style="font-size:13px; font-weight:bold; margin-bottom:4px;">или</div>
            <div style="font-weight:bold; color:#1eaea7; font-size:18px; margin-bottom:16px;">
              ${chosenTariff.yearlyPrice ?? ""}
              <span style="font-size:13px; color:#374151; font-weight:normal;">/ год</span>
            </div>
            <div style="text-align:left; margin:0 auto; max-width:220px;">
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                Storage <span style="color:#1eaea7; margin-left:4px;">${chosenTariff.features.storage ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                RAM <span style="color:#1eaea7; margin-left:4px;">${chosenTariff.features.ram ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                vCPU <span style="color:#1eaea7; margin-left:4px;">${chosenTariff.features.vcpu ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                <span style="color:#1eaea7;">${chosenTariff.features.speed ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                OS <span style="color:#1eaea7; margin-left:4px;">${chosenTariff.features.os ?? ""}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    case MailType.AdditionalServices:
      const chosenService = additionalServices.find(
        (service) => service.value === payload.additionalServices
      );
      return `
      <h2 style="padding: 16px 8px; text-align: center;">Заявка на дополнительные услуги</h2>
      <div style="border-radius:12px; border:1px solid #e0e0e0; padding:24px 16px; max-width:320px; min-width:200px; font-family:'Roboto Mono',monospace; background:#fff; height:100%; margin:0 auto;">
        <div style="font-size:20px; font-weight:400; color:#333; letter-spacing:0.5px; margin-bottom:8px;">
          ${chosenService.name}
        </div>
      
        <div style="font-size:15px; color:#333; letter-spacing:0.5px; margin-bottom:16px; flex-grow:1;">
          <span style="font-weight:bold; color:#1eaea7; font-size:16px;">
            ${chosenService.price} ${chosenService.priceCurrency}
          </span>
          / ${chosenService.billingTypes}
        </div>
      </div>
      `;
    case MailType.CustomPlans:
      const { customRequestData } = payload;
      return `
        <h2 style="padding: 16px 8px; text-align: center;">Заявка на индивидуальный тариф</h2>
         <div style="border-radius:16px;border:1px solid #e0e0e0;overflow:hidden;max-width:350px;font-family:'IBM Plex Sans',Arial,sans-serif;background:#fff;">
          <div style="padding: 24px 16px; text-align: center;">
            <div style="text-align:left; margin:0 auto; max-width:220px;">
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                Storage <span style="color:#1eaea7; margin-left:4px;">${customRequestData.storage ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                RAM <span style="color:#1eaea7; margin-left:4px;">${customRequestData.ram ?? ""}</span>
              </div>
              <div style="font-size:13px; font-weight:bold; margin-bottom:8px;">
                vCPU <span style="color:#1eaea7; margin-left:4px;">${customRequestData.cpu ?? ""}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    default:
      return "<p>Нет данных для письма.</p>";
  }
}
