import { getCurrentUser } from '@/lib/session'

export default async function Page() {
  const user = await getCurrentUser()

  return <h1>Welcome {user}!</h1>
}
