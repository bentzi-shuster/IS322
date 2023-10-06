import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const passwordConfirmation = formData.get('confirm_password')
  if (password !== passwordConfirmation) {
    console.log('Passwords do not match')
    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    statusText: 'Passwords do not match',
    
    })
  }
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
let { data, error } =  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })
  console.log(data, error)

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}