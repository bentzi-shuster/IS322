import Post from "@/components/Post";
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  let user =await supabase.auth.setSession(cookies).then((res) => res.data)
  if (user) {
    console.log( user)
  }
  return (
    <>
    <div
    className="
    flex
    justify-center
    items-center
    bg-[rgba(255,255,255,0.5)]
    bg-blur-lg
    mx-auto
w-1/2
px-4
py-2
rounded-md
my-4
    "
    >
    <h1 className="text-2xl">Let Him Cook</h1>
    </div>
    
    
        <Post comments={["hi mom"]} date={Date.now()} likes={19} title={"test"}  userobj={{name:"joe biden"}} bgImgUrl="/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8-761863022.jpg" bgImgAlt="temp"/>

    </>
  )
}
