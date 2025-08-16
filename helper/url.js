// helper/urls.js
export function getBaseUrl(req) {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, "");

  const proto =
    (req?.headers?.["x-forwarded-proto"] || "").toString() || "https";
  const host = (
    req?.headers?.["x-forwarded-host"] ||
    req?.headers?.host ||
    ""
  ).toString();
  return `${proto}://${host}`.replace(/\/$/, "");
}
