// lib/urls.js

export function getBaseUrl(req) {
  // If you set NEXT_PUBLIC_SITE_URL in Netlify, we’ll use that first.
  // e.g. https://statuesque-baklava-15de85.netlify.app
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, "");

  // Fallback: derive from request headers (works on Netlify/Vercel)
  const proto =
    (req?.headers?.["x-forwarded-proto"] || "").toString() || "https";
  const host = (
    req?.headers?.["x-forwarded-host"] ||
    req?.headers?.host ||
    ""
  ).toString();
  return `${proto}://${host}`.replace(/\/$/, "");
}
