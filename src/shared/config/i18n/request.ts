import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["en", "de"];
const DEFAULT_LOCALE = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("locale")?.value;

  const locale: string = SUPPORTED_LOCALES.includes(localeFromCookie || "")
    ? localeFromCookie!
    : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../../../messages/${locale}.json`)).default,
  };
});

// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async ({ locale }) => {
//   return {
//     messages: (await import(`../../../../messages/${locale}.json`)).default,
//   };
// });
