import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound, redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Search from '@/components/Search'
import SearchAction from '../action'
export default async function SearchPage() {
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
    
<h1 className="text-3xl font-bold">Search</h1>


<Search SearchAction={SearchAction} />
    </>
  )
}

