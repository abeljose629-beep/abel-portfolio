import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

// Vercel serverless functions can only write to /tmp
const DB_PATH =
  process.env.NODE_ENV === 'production'
    ? '/tmp/portfolio.db'
    : path.join(process.cwd(), 'data', 'portfolio.db')

declare global {
  // eslint-disable-next-line no-var
  var _db: Database.Database | undefined
}

export function getDb(): Database.Database {
  if (!global._db) {
    if (process.env.NODE_ENV !== 'production') {
      fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })
    }
    global._db = new Database(DB_PATH)
    global._db.exec(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now')),
        read INTEGER DEFAULT 0
      )
    `)
  }
  return global._db
}

export type Submission = {
  id: number
  name: string
  email: string
  message: string
  created_at: string
  read: number
}
