import Image from 'next/image'
import React from 'react'

const Post = ({userobj,title, date, likes, comments, bgImgUrl, bgImgAlt}) => {
  return (
    <>
    <div className='Post rounded-md w-4/5 mx-auto min-h-[10em] relative'>
<div className='black-gradient
bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] absolute top-0 left-0 rounded-md z-10 w-full h-full
'></div>

<Image height={"150"} width={"150"} src={bgImgUrl} alt={bgImgAlt} 
className='absolute top-0 left-0 rounded-md  w-full h-full object-cover'
/>


<div
className='
text-white p-2 absolute bottom-0 left-0 z-20 flex flex-col
'>
  <p> {userobj.name}</p>
  <h2 className='text-2xl'>{title}</h2>
<p> {new Date(date).toLocaleDateString()}</p>
 
</div>
    </div>
    
    
    
    </>
    
  )
}

export default Post