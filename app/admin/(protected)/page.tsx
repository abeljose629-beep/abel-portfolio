'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import {
  Mail,
  MailOpen,
  Trash2,
  LogOut,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Inbox,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Submission } from '@/lib/db'

export default function AdminDashboard() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<number | null>(null)

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/submissions')
      if (res.status === 401) { router.push('/admin/login'); return }
      setSubmissions(await res.json())
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => { fetchSubmissions() }, [fetchSubmissions])

  async function markRead(id: number, read: boolean) {
    await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, read }),
    })
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, read: read ? 1 : 0 } : s))
    )
  }

  async function deleteSubmission(id: number) {
    await fetch('/api/admin/submissions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setSubmissions((prev) => prev.filter((s) => s.id !== id))
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  function toggleExpand(id: number, isRead: boolean) {
    setExpanded((prev) => (prev === id ? null : id))
    if (!isRead) markRead(id, true)
  }

  const unread = submissions.filter((s) => !s.read).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold">Contact Submissions</h1>
            {unread > 0 && (
              <Badge variant="default" className="tabular-nums">
                {unread} unread
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={fetchSubmissions} disabled={loading}>
              <RefreshCw className={`size-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="size-4" />
              <span className="ml-1 hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <StatCard label="Total" value={submissions.length} />
          <StatCard label="Unread" value={unread} highlight={unread > 0} />
          <StatCard label="Read" value={submissions.length - unread} className="hidden sm:flex" />
        </div>

        {/* List */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        ) : submissions.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-24 text-muted-foreground">
            <Inbox className="size-12 opacity-40" />
            <p>No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {submissions.map((s) => (
              <div
                key={s.id}
                className={`rounded-xl border transition-colors ${
                  s.read ? 'border-border bg-card' : 'border-primary/30 bg-primary/5'
                }`}
              >
                {/* Row header */}
                <button
                  className="flex w-full items-start gap-3 px-4 py-4 text-left"
                  onClick={() => toggleExpand(s.id, Boolean(s.read))}
                >
                  <span className="mt-0.5 shrink-0 text-muted-foreground">
                    {s.read ? (
                      <MailOpen className="size-4" />
                    ) : (
                      <Mail className="size-4 text-primary" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${!s.read ? 'text-foreground' : 'text-foreground/80'}`}>
                        {s.name}
                      </span>
                      {!s.read && (
                        <span className="size-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{s.email}</p>
                    {expanded !== s.id && (
                      <p className="mt-1 truncate text-sm text-muted-foreground/70">
                        {s.message}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(s.created_at + 'Z'), { addSuffix: true })}
                    </span>
                    {expanded === s.id ? (
                      <ChevronUp className="size-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="size-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Expanded message */}
                {expanded === s.id && (
                  <div className="border-t border-border px-4 py-4">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{s.message}</p>
                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markRead(s.id, !s.read)}
                      >
                        {s.read ? (
                          <>
                            <Mail className="size-3.5" /> Mark unread
                          </>
                        ) : (
                          <>
                            <MailOpen className="size-3.5" /> Mark read
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                        onClick={() => deleteSubmission(s.id)}
                      >
                        <Trash2 className="size-3.5" /> Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  highlight,
  className,
}: {
  label: string
  value: number
  highlight?: boolean
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
      } ${className ?? ''}`}
    >
      <p className="text-2xl font-bold tabular-nums">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
