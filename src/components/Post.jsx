"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react";

const Post = ({post, showCheckbox}) => {
  console.log(post);
  const supabase=createClientComponentClient()
let [post_visible, setPost_visible] = useState(post.post_visible)
  return (<>
<div className={"card w-96 bg-accent-900 text-neutral-content mx-auto shadow-2xl"+(post_visible ? "":" opacity-50")}>
  <div className="card-body">
    {/* {(post.post_visible ? "":"This post is private")} */}
    {!post_visible&&(<>
      <p>{post_visible ? "":"This post is private"}</p>
    </>)}
    {showCheckbox&&(


    <div>
      <label htmlFor="post_visible" className="cursor-pointer label flex flex-row gap-10">
    <span className="label-text">    <input type="checkbox" checked={post_visible?"checked":""} name="post_visible" className="checkbox"  onChange={async (e)=>{
      const data= await supabase
      .from('Post')
      .update({ post_visible: !post_visible })
      .eq('id', post.id)
      console.log(data)
      setPost_visible(!post_visible)
    }
    }
    /> Toggle Public</span>

    </label>

      </div>
      )}
    <h2 className="card-title">{post.post_title}</h2>
    <p>{post.post_description}</p>
  </div>
  <div className="p-4 card-actions">  
    {post["Post_User_Data"].post_user_data_first_name}
  </div>
</div>

    
     </>
  )
}

export default Post