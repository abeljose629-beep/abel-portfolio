import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminCredentials, createSessionToken } from '@/lib/session'

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 })
    }

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
    }

    const token = createSessionToken(username)
    const res = NextResponse.json({ success: true })
    res.cookies.set('admin_session', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
      secure: process.env.NODE_ENV === 'production',
    })
    return res
  } catch (err) {
    console.error('Login error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
