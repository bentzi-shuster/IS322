import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options:
    {
      redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`

    }
  })

  console.log(data, error)  
  return NextResponse.redirect(data.url, {
    status: 301,
  })
}