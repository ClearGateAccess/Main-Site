export function isContactConfigured(endpoint, siteKey) {
  if (!siteKey?.trim()) return false;
  try {
    const url = new URL(endpoint);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}
