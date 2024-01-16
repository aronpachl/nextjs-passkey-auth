import Link from 'next/link'

export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-24">
      <h1 className={'text-center'}>This is the home page</h1>
      <p className={'text-xs'}>
        This page is not secured! Login to access{' '}
        <Link className={'text-blue-400 underline'} href={'/dashboard'}>
          Dashboard
        </Link>
      </p>
    </main>
  )
}
