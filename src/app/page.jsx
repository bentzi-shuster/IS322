// import Post from "@/components/Post";
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
// import Hero from "@/components/Hero";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
console.log(user)  
  return (
    <>

{!user && (
  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div>
      <h1 className="text-5xl font-bold">Just another crappy twitter clone</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus officia aperiam quas quam quos laboriosam dolores alias iure autem nisi. Alias asperiores optio tempora veniam nobis totam dolor, et quae!</p>
      <a href="/account/login"
       role='button' className="btn btn-primary">Get Started</a>
    </div>
  </div>
</div>
)}
    {user && (   
    <h1> Hello {user.user_metadata["full_name"]}, <br></br>email: {user["email"]}</h1>
     )}
        {/* <Post comments={["hi mom"]} date={Date.now()} likes={19} title={"test"}  userobj={{name:"joe biden"}} bgImgUrl="/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8-761863022.jpg" bgImgAlt="temp"/> */}

    </>
  )
}
