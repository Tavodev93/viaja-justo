import crypto from "crypto"

const SECRET = process.env.ACCESS_COOKIE_SECRET!

export function signAccess(expiresAt: number) {
  const payload = expiresAt.toString()
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")

  return `${payload}.${signature}`
}

export function verifyAccess(token: string) {
  const [payload, signature] = token.split(".")
  if (!payload || !signature) return null

  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")

  if (expected !== signature) return null

  const expiresAt = Number(payload)
  if (Date.now() > expiresAt) return null

  return expiresAt
}
