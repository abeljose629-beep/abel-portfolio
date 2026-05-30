import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/session'
import { getDb } from '@/lib/db'

async function requireAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token || !verifySessionToken(token)) return false
  return true
}

export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = getDb()
  const submissions = db.prepare(
    'SELECT * FROM contact_submissions ORDER BY created_at DESC'
  ).all()
  return NextResponse.json(submissions)
}

export async function PATCH(req: NextRequest) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id, read } = await req.json()
  const db = getDb()
  db.prepare('UPDATE contact_submissions SET read = ? WHERE id = ?').run(read ? 1 : 0, id)
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await req.json()
  const db = getDb()
  db.prepare('DELETE FROM contact_submissions WHERE id = ?').run(id)
  return NextResponse.json({ success: true })
}
