import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions)
    return session?.user?.email || ''
  } catch (error) {
    return null
  }
}
