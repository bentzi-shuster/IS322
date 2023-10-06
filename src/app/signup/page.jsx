"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function Login() {
  const supabase = createClientComponentClient()
  async function signInWithGitHub() {
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options:
      {
        redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`

      }
    })
  }

async function resetPWD(){
    await supabase.auth.resetPasswordForEmail(prompt("email"), {
      redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL+'/auth/callback?next=/account/update-password',
    })
  }
    return (
    <>



     {/* <form action="/auth/login" method="post">
      email: <input type="text" name="email" />
      password: <input type="password" name="password" />
      <button className="p-4">Sign In</button> */}
      
      {/* </form> */}

      <form action="/auth/sign-up" method="post" className="mt-[5em] p-4 bg-emerald-200 border-2 border-gray-400 border-solid rounded-md mx-auto flex flex-col max-w-md ">
      <label htmlFor="email">Email</label>
      <input name="email"  type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
    <label htmlFor="password">Confirm Password</label>
    <input type="password" name="password" />
      <div className="flex flex-row justify-between">
      {/* <button type="submit" className="m-4 py-2 px-4 bg-slate-800 rounded-md text-white" >
       Sign In</button> */}
{/*  first is the one that is used by default like when you press enter */}
      <button  className="m-4 py-2 px-4 bg-slate-800 rounded-md text-white" >Sign Up</button>
      {/* <button formAction="/auth/logout" className="m-4 py-2 px-4 bg-slate-200 rounded-md text-black" >Sign Out</button> */}
      <button className="m-4 py-2 px-4 bg-slate-200 rounded-md text-black"
      type="button"
      onClick={signInWithGitHub}
     > GitHub Sign Up
     </button>

      </div>
    </form>
    <a href="/login">login HERE</a> <br />
    <button onClick={resetPWD}>ResetPWD</button>
</>
    
    )
  }