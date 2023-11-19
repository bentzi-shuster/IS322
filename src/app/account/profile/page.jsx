"use client";
import { action } from "@/app/action";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useRef } from "react";
import { useFormState } from 'react-dom'
export default function Page(){
 
  const supabase = createClientComponentClient({

  })
let Fname = useRef(null);
let Lname = useRef(null);
let user = useRef(null);
useEffect(() => {
  async function getUser() {
    const user=  supabase.auth.getUser()
    console.log(user);
    return user
  }
  getUser().then((data) => {
    user.current = data.data.user;
  });
},[supabase.auth]);

let result ={}
const [state, formAction] = useFormState(action,result);
  return (
    <>
  
    <h2 className="text-3xl font-bold"
    >
     {user.current?.user_metadata["full_name"]!==undefined?user.current?.user_metadata["full_name"]:""}
    </h2>
    {/* <div>
      email: {user["email"]}
    </div>
    <div>
     {JSON.stringify(user)}
    </div> */}

<form className="flex flex-col justify-center items-center" action={formAction}>
<input type="text" placeholder="First Name" className="border-2 border-black rounded-md p-2 m-2 text-black" defaultValue={user.current?.user_metadata["first_name"]?user.current?.user_metadata["first_name"]:""} name="first_name" ref={Fname} />
<input type="text" placeholder="Last Name" className="border-2 border-black rounded-md p-2 m-2 text-black" defaultValue={user.current?.user_metadata["last_name"]?user.current?.user_metadata["last_name"]:""} name="last_name" ref={Lname} />
<button type="submit" className="border-2 border-black rounded-md p-2 m-2">Submit</button>
</form>


    </>
    )
  }