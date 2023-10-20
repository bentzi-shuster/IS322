// import Post from "@/components/Post";
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Post from '@/components/Post'
import Image from 'next/image'
// import Hero from "@/components/Hero";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies})
  const {
    data: { user },
  } = await supabase.auth.getUser()
// console.log(user)  



let{ data, error } = await supabase
.from('Post')
.select('post_title, post_description, post_visible, post_userid,Post_User_Data(post_user_data_user_id, post_user_data_photo, post_user_data_first_name)')
.match({post_visible: 'true'})

if (error) console.log('error', error)
console.log(data)





  return (
    <>

{!user && (
  <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div>
      <h1 className="text-5xl font-bold">Just another crappy twitter clone</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus officia aperiam quas quam quos laboriosam dolores alias iure autem nisi. Alias asperiores optio tempora veniam nobis totam dolor, et quae!</p>
      <a href="/account/login"
       role='button' className="btn btn-primary">Get Started</a>
       
    </div>  
    <div>


    <h1 className="text-5xl font-bold mt-20 "
  > The reviews are in</h1>
  <h2 className="text-2xl font-bold text-primary-300">
    see what people are saying about $#*tter
  </h2>
  



<div className=' flex flex-col xl:flex-row gap-4 mt-10'>


<div className="card bg-primary-700 shadow-xl w-full md:w-96">
  <div className="card-body">
  <div className="chat chat-start">
  <div className="ms-14 chat-bubble chat-bubble-info">The release of the app was a shit show</div>
</div>
  <Image  src={"https://randomuser.me/api/portraits/men/99.jpg"} width={75} height={75} alt='user' className="rounded-full" />
  <div className='font-semibold'>Josh Simpson</div>
  
  </div>
  <div className="rating absolute right-2 bottom-5">
  <input type="radio" defaultChecked className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
</div>
</div>


<div className="card w-full md:w-96 bg-primary-700 shadow-xl">
  <div className="card-body">
  <div className="chat chat-start">
  <div className="ms-14 chat-bubble chat-bubble-info">What a pile of crap, 0/10, wouldnt recommend
  </div>
</div>
  <Image  src={"https://randomuser.me/api/portraits/men/54.jpg"} width={75} height={75} alt='user' className="rounded-full" />
  <div className='font-semibold'>John Smith</div>
  </div>
  <div className="rating absolute right-2 bottom-5">
  <input type="radio" defaultChecked className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
</div>
</div>


<div className="card w-full md:w-96 bg-primary-700 shadow-xl">
  <div className="card-body">
  <div className="chat chat-start">
  <div className="ms-14 chat-bubble chat-bubble-info">I love this app like I love my son</div>
</div>
  <Image  src={"https://randomuser.me/api/portraits/men/82.jpg"} width={75} height={75} alt='user' className="rounded-full" />
  <div className='font-semibold'>Jack Samson</div>
  </div>
  <div className="rating absolute right-2 bottom-5">
  <input type="radio" defaultChecked className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
  <input type="radio" className="mask mask-star rating pointer-events-none" />
</div>
</div>


</div>



       </div>
</div>
  </div>

)}
    {user && (   
    <h1> Hello {user.user_metadata["full_name"]}, <br></br>email: {user["email"]}</h1>
    
   ) }

    <div className="flex flex-col gap-4">
    {data?.map((post, index) => {
      return (
        <Post key={index} post={post} />
      )
    })}
    </div>
    </>
  )
}
