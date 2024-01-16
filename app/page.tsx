import Image from 'next/image'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1>This is the home page</h1>
      <p className={'text-xs'}>
        This page is not secured! Login to access{' '}
        <Link className={'text-blue-400 underline'} href={'/dashboard'}>
          Dashboard
        </Link>
      </p>
    </main>
  )
}
