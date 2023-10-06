"use client"

import Form from "@/components/Form"
import { resetPWD } from "@/lib/pwdReset"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function Login() {
  const formData = [
    {
      type: "text",
      label: "Email",
      name: "email",
    },
    {
      type: "password",
      label: "Password",
      name: "password",
    },
    {
      type: "password",
      label: "Confirm Password",
      name: "confirm_password",
    },
    {
      type: "button",
      value: "Submit",
      formAction: null,
      btnType: "submit",
    },
  ];
  
  // The JSON object containing the form data
  const jsonData = {
    action: "/auth/sign-up", 
    method: "POST",   
    title: "Sign up with email",
    formdata: formData,
  };
  
  // Now you can use this `jsonData` object when rendering your `Form` component
  // <Form data={jsonData} />
  
  const supabase = createClientComponentClient()
  

// async function resetPWD(){
//     await supabase.auth.resetPasswordForEmail(prompt("email"), {
//       redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL+'/auth/callback?next=/account/update-password',
//     })
//   }
    return (
    <>



     {/* <form action="/auth/login" method="post">
      email: <input type="text" name="email" />
      password: <input type="password" name="password" />
      <button className="p-4">Sign In</button> */}
      
      {/* </form> */}

      {/* <form action="/auth/login" method="post" className="mt-[5em] p-4 bg-emerald-200 border-2 border-gray-400 border-solid rounded-md mx-auto flex flex-col max-w-md ">
      <label htmlFor="email">Email</label>
      <input name="email"  type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <div className="flex flex-row justify-between">
      <button type="submit" className="m-4 py-2 px-4 bg-slate-800 rounded-md text-white" >
       Sign In</button> */}


{/*  first is the one that is used by default like when you press enter */}
      {/* <button formAction="/auth/sign-up" className="m-4 py-2 px-4 bg-slate-200 rounded-md text-black" >Sign Up</button> */}
      {/* <button formAction="/auth/logout" className="m-4 py-2 px-4 bg-slate-200 rounded-md text-black" >Sign Out</button> */}


      {/* <button className="m-4 py-2 px-4 bg-slate-200 rounded-md text-black"
      type="button"
      onClick={signInWithGitHub}
     > GitHub Sign In 
     </button> */}

      {/* </div>
    </form> */}

<Form 
data={jsonData}
/>
<Form 
data={
  {
    action: "/auth/github", 
    method: "POST",
    title: "Sign up with GitHub",
    formdata: [
      {
        type: "button",
        value: "Sign up with GitHub",
        formAction: null,
        btnType: "submit",
      },
    ]
  }
}
/>
<div className="flex flex-row items-center max-w-md 3 mx-auto justify-around">
    <button onClick={()=>resetPWD(supabase)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4
    ">ResetPWD</button>
  <a href="/account/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Login HERE</a> 

</div>

  </>  
    )
  }