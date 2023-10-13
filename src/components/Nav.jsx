import Image from 'next/image'
import React from 'react'
export const Nav = ({pfplink,isLoggedIn}) => {
  return (
    // <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
    //     <ul className="flex items-center justify-between space-x-4">
    //         <li className="p-4">
    //             <a href="/">Home</a>
    //         </li>
    //         <li className="p-4">
    //             <a href="/account/login">Login</a>
    //         </li>
    //         <li className="p-4">
    //         <form action="/auth/logout" method="post">
    //         <button className="p-4">Sign Out</button>
    //         </form>
    //         </li>

    //     </ul>
    // </nav>
    <>
    <nav className="navbar bg-primary-800 dark:bg-primary-900 mt-3 rounded-lg w-[95%] -translate-x-1/2 left-1/2 fixed z-40 shadow-2xl">

  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href="/">
      <span className="text-lg font-bold">$#*tter</span>
      </a>
  </div>
  {isLoggedIn ? (
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src={pfplink} width={40} height={40} className="rounded-full" alt="profile picture" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary-800 dark:bg-primary-900  rounded-box w-52">
        <li>
          <a href='/account/profile' className="justify-between">
            Profile
          </a>
        </li>
       <li><form action="/auth/logout" method="post" className="flex w-full h-full p-0 ">
        {/* make button fill space */}
         <button className="flex-1 text-left py-0.5 px-3"
         >Sign Out</button>
          </form>
</li>
      </ul>
    </div>
    </div>
  ):
  (<div className="flex-none gap-2">
    <a role="button" href="/account/login" className="btn btn-primary">Login</a>
    </div>)}
    </nav>
 <div className="h-20"></div> 
 {/* 
 this is a spacer div to make sure the nav bar doesn't cover the content
 */}
 
    </>
  )
}
