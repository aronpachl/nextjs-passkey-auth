import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={
            'sticky top-0 w-full bg-slate-900 border-b border-black h-[68px] flex items-center justify-end px-8'
          }
        >
          {user ? (
            <Link
              className={
                'bg-white rounded-md px-2 py-2 text-slate-950 min-w-[100px] text-center'
              }
              href={'/api/auth/signout'}
            >
              Logout
            </Link>
          ) : (
            <Link
              className={
                'bg-white rounded-md px-2 py-2 text-slate-950 min-w-[100px] text-center'
              }
              href={'/api/auth/signin'}
            >
              Login
            </Link>
          )}
        </div>
        {children}
      </body>
    </html>
  )
}
