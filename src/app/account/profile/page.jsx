"use client";
import { action } from "@/app/action";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useRef, useState } from "react";
import { useFormState } from 'react-dom'
export default function Page(){
 
  const supabase = createClientComponentClient({

  })
let Fname = useRef(null);
let Lname = useRef(null);
let user = useRef(null);
let getUser= async () => {
    const user=  supabase.auth.getUser()
    console.log(user);
    if (user)
    return user
  }
  getUser().then((data) => {
    user.current = data?.data?.user;
    setFirstName(user.current?.user_metadata["full_name"]?user.current?.user_metadata["full_name"].split(" ")[0]:"")
    setLastName(user.current?.user_metadata["full_name"]?user.current?.user_metadata["full_name"].split(" ")[user.current?.user_metadata["full_name"].split(" ").length-1]:"")
  });
let [first_name, setFirstName] = useState("");
let [last_name, setLastName] = useState("");

let result ={}
const [state, formAction] = useFormState(action,result);
  return (
    <>
  
    <h2 className="text-3xl font-bold align-middle mt-5"
    >
    Hello {user.current?.user_metadata["full_name"]!==undefined?user.current?.user_metadata["full_name"]:""}
    </h2>
    {/* <div>
      email: {user["email"]}
    </div>
    <div>
     {JSON.stringify(user)}
    </div> */}

<form className="flex flex-col justify-center mt-10 items-center gap-4" action={formAction}>
<div className="flex flex-row justify-center gap-4">
<label className="text-2xl font-bold align-middle mt-5" htmlFor="first_name">First Name</label>
<input type="text" placeholder="First Name" className="border-2 border-black rounded-md p-2 m-2 text-black" defaultValue={first_name} name="first_name" ref={Fname} id="first_name" />
</div>
<div className="flex flex-row justify-center gap-4">
<label className="text-2xl font-bold align-middle mt-5" htmlFor="last_name">Last Name</label>
<input type="text" placeholder="Last Name" className="border-2 border-black rounded-md p-2 m-2 text-black" defaultValue={last_name} name="last_name" ref={Lname} id="last_name" />
</div>
<button type="submit" className="border-2 border-black rounded-md p-2 m-2">Submit</button>
{/* {JSON.stringify(user)} */}
</form>


    </>
    )
  }