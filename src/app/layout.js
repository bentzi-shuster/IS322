import { Nav } from '@/components/Nav'
import './globals.css'
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: '$#*tter',
  description: 'The place for chefs to share their recipes',
}
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Footer from '@/components/Footer'
export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <html lang="en">
      <body
      className='
      dark:bg-background-800
      bg-background-600
      h-screen
      text-text-200
      '
      >
            <Nav pfplink={user?.user_metadata?.avatar_url} isLoggedIn={!!user} />
            {children}
            <Footer />
        </body>
    </html>
  )
}
