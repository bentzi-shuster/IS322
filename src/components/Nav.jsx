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
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href="/">
      <span className="text-lg font-bold">Let Him Cook</span>
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
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
    <a href="/account/login" className="btn btn-ghost">Login</a>
    </div>)}
    </div>
  )
}
