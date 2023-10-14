import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound, redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function page() {
    const supabase = createServerComponentClient({
        cookies,
      })
    
      const {
        data: { session },
      } = await supabase.auth.getSession()
    if (!session) {
        // this is a protected route - only users who are signed in can view this route
        redirect('/account/login')
      }
  return (
    <>
    
<h1 className="text-3xl font-bold">Post</h1>
    <p>
        If you can see this, you are signed in!
    </p>

    </>
  )
}

