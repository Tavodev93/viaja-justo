const ACCESS_KEY = "viaja-justo-access";

export function grantAccess24h() {
  if (typeof window === "undefined") return;

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem(ACCESS_KEY, expiresAt.toString());
}

export function hasActiveAccess(): boolean {
  if (typeof window === "undefined") return false;

  const value = localStorage.getItem(ACCESS_KEY);
  if (!value) return false;

  return Date.now() < Number(value);
}