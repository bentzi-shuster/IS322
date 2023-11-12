import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound, redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Post from '@/components/Post'

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
      let{ data, error } = await supabase
      .from('Post')
      .select('id, post_title, post_description, post_visible, post_userid,Post_User_Data(post_user_data_user_id, post_user_data_photo, post_user_data_first_name)')
      .match({post_userid: session.user.id}).order('post_visible', { ascending: false })
  return (
    <>
        <div className="flex flex-col gap-4">
    {data?.map((post, index) => {
      return (
        <Post key={index} post={post} showCheckbox={true} />
      )
    })}
    </div>

    </>
  )
}

