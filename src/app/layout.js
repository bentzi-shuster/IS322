import { Nav } from '@/components/Nav'
import './globals.css'
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Let Him Cook',
  description: 'The place for chefs to share their recipes',
}
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <html lang="en">
      <body
      className='
      bg-background-50
      h-screen
      '
      >
            <Nav pfplink={user?.user_metadata?.avatar_url} isLoggedIn={!!user} />
            {children}
        </body>
    </html>
  )
}
