import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
export default async function  Profile() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <>
  
    <h2 className="text-3xl font-bold"
    >
     {user.user_metadata["full_name"]}s Profile
    </h2>
    <div>
      email: {user["email"]}
    </div>
    <div>
     {JSON.stringify(user)}
    </div>
    </>
    )
  }