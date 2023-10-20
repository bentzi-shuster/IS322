import React from 'react'

const Post = ({post}) => {
  return (<>
<div className="card w-96 bg-accent-900 text-neutral-content mx-auto shadow-2xl">
  <div className="card-body">
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