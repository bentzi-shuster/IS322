import React from 'react'
import 'material-symbols';
const Footer = () => {
  return (
    <>
<div className="h-20">

</div>

<footer className="btm-nav bg-primary-800 dark:bg-primary-900 my-3 md:w-3/5 mx-auto rounded-full w-11/12 text-white">
<a href="/search">
 <span className="material-symbols-outlined h-5 w-5" >
    search
 </span>
  <span className="btm-nav-label">Search</span>

</a>
<a href="/post">
 <span className="material-symbols-outlined h-5 w-5" >
    add_circle
 </span>
  <span className="btm-nav-label">Post</span>
</a>
<a href="/">
 <span className="material-symbols-outlined h-5 w-5" >
    home
 </span>
  <span className="btm-nav-label">Home</span>
</a>

<a href="/message">
 <span className="material-symbols-outlined h-5 w-5" >
    message
 </span>
  <span className="btm-nav-label">Message</span>
</a>
</footer>        
</>     

  )
}

export default Footer