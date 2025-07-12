import * as yup from "yup";

const allowedDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "icloud.com",
  "mail.ru",
  "yandex.ru",
  "hotmail.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
];

export const registrationSchema = yup.object({
  name: yup
    .string()
    .required("nameRequired")
    .min(6, "nameMin")
    .max(20, "nameMax"),

  email: yup
    .string()
    .required("emailRequired")
    .email("emailInvalid")
    .test("is-allowed-domain", "emailDomainNotAllowed", (value) => {
      if (!value) return false;
      const domain = value.split("@")[1];
      return allowedDomains.includes(domain);
    }),

  password: yup
    .string()
    .required("passwordRequired")
    .min(6, "passwordMin")
    .max(20, "passwordMax"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("emailRequired")
    .email("emailInvalid")
    .test("is-allowed-domain", "emailDomainNotAllowed", (value) => {
      if (!value) return false;
      const domain = value.split("@")[1];
      return allowedDomains.includes(domain);
    }),

  password: yup
    .string()
    .required("passwordRequired")
    .min(6, "passwordMin")
    .max(20, "passwordMax"),
});

export type RegistrationFormData = yup.InferType<typeof registrationSchema>;
export type LoginFormData = yup.InferType<typeof loginSchema>;
