import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request){
    const formData = await request.formData()
  const requestUrl = new URL(request.url)
  const post_title= formData.get('post_title')
  const post_description = formData.get('post_description')
  const post_public= formData.get('post_public')
  const jwt = formData.get('jwt')
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  let  {
    data: { user },
  } = await supabase.auth.getUser(jwt)
  console.log(user)
  console.log({post_userid: user.id, post_title: post_title, post_description: post_description, post_visible: post_public});
  const { data, error } = await supabase
  .from('Post')
  .insert([
    { post_userid: user.id, post_title: post_title, post_description: post_description, post_visible: post_public?true:false },
  ]).select()
  console.log(data, error)

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })

}