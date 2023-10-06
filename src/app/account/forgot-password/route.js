import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  let formData = await request.formData()
    let email = formData.get('email')
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })


let data =  await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL+'/auth/callback?next=/account/update-password',
    })


  return NextResponse.redirect(`${requestUrl.origin}/account/login`, {
    status: 301,
  })
}
// https://supabase.com/docs/guides/auth/auth-helpers/nextjs