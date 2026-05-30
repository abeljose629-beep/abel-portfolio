import crypto from 'crypto'

const SECRET = process.env.SESSION_SECRET || 'dev-secret-please-change-in-production'

export function createSessionToken(username: string): string {
  const expires = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
  const data = `${username}:${expires}`
  const hmac = crypto.createHmac('sha256', SECRET).update(data).digest('hex')
  return Buffer.from(`${data}:${hmac}`).toString('base64url')
}

export function verifySessionToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, 'base64url').toString()
    const lastColon = decoded.lastIndexOf(':')
    const data = decoded.slice(0, lastColon)
    const hmac = decoded.slice(lastColon + 1)

    const expectedHmac = crypto.createHmac('sha256', SECRET).update(data).digest('hex')
    const hmacBuf = Buffer.from(hmac, 'hex')
    const expectedBuf = Buffer.from(expectedHmac, 'hex')
    if (hmacBuf.length !== expectedBuf.length) return null
    if (!crypto.timingSafeEqual(hmacBuf, expectedBuf)) return null

    const colonIdx = data.indexOf(':')
    const username = data.slice(0, colonIdx)
    const expires = parseInt(data.slice(colonIdx + 1))
    if (isNaN(expires) || Date.now() > expires) return null

    return username
  } catch {
    return null
  }
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || 'admin'
  const expectedPass = process.env.ADMIN_PASSWORD || 'admin123'
  const userMatch = crypto.timingSafeEqual(Buffer.from(username), Buffer.from(expectedUser))
  const passMatch = crypto.timingSafeEqual(Buffer.from(password), Buffer.from(expectedPass))
  return userMatch && passMatch
}
