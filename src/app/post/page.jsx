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
    
<form action="/api/post" method='POST' className=" mx-auto sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5 px-10 mt-2 bg-background-700 rounded-lg shadow-xl py-11">
<h1 className="text-3xl font-bold">Post</h1>
{/* <h2 className="text-xl font-bold">Not implemented yet</h2> */}
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Post Title</span>
  </label>
  <input type="text" name="post_title" placeholder="Title of your post" className="input input-bordered w-full" />

</div>
<div className="form-control w-full">
  <label className="label">
    <span className="label-text">Post Description</span>
  </label>
  <textarea name="post_description" className="textarea textarea-bordered h-24 w-full" placeholder="Description"></textarea>
</div>

<div className="form-control w-full flex flex-row">
  <label className="cursor-pointer label flex flex-row gap-10">
    <span className="label-text">Public</span>
    <input name='post_public' type="checkbox" defaultChecked className="checkbox checkbox-info" />
  </label>
   {/* make this a radio on mobile */}
</div>
<input type="hidden" name="jwt" value={encodeURIComponent(session.access_token)} />
<button className='btn btn-info'>Post</button>
</form>
    </>
  )
}

