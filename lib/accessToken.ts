export const runtime = "nodejs"

import { createHmac } from "crypto"

const SECRET = process.env.ACCESS_COOKIE_SECRET!

export function signAccess(expiresAt: number) {
  const payload = expiresAt.toString()

  const signature = createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")

  return `${payload}.${signature}`
}

export function verifyAccess(token: string) {
  const parts = token.split(".")
  if (parts.length !== 2) return null

  const [payload, signature] = parts

  const expectedSignature = createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")

  if (expectedSignature !== signature) return null

  const expiresAt = Number(payload)
  if (Number.isNaN(expiresAt)) return null
  if (Date.now() > expiresAt) return null

  return expiresAt
}
