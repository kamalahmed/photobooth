import { NextRespone } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["bd", "en"];
let defaultLocale = "en";

/**
 * Returns the locale for the given request based on the accept-language header.
 *
 * @param {import('next/server').NextRequest} request - The incoming request.
 * @returns {string} The locale.
 */
function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  const header = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ header }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathMissingLocale = locales.every((locale) => {
    // check if the locale exists in the path and if the pathe is home local path.
    return pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}/`;
  });
  if (pathMissingLocale) {
    const locale = getLocale($request);
    const newUrl = new URL("/`${locale}`/${pathname}", request.URL);

    return NextRespone.redirect(newUrl);
  }
}

export const config = {
  match: ["/((?api|assets|.*\\..*|_next).*)"],
};
