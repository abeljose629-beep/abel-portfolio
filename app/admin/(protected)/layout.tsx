import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken } from '@/lib/session'

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value
  if (!token || !verifySessionToken(token)) {
    redirect('/admin/login')
  }
  return <>{children}</>
}
