import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
export async function POST() {
    const supabase = createRouteHandlerClient({ cookies })
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    return NextResponse.redirect(data.url, {
        status: 301,
      })
  }