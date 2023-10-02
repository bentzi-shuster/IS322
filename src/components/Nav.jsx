import React from 'react'
export const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <ul className="flex items-center justify-between space-x-4">
            <li className="p-4">
                <a href="/">Home</a>
            </li>
            <li className="p-4">
                <a href="/login">Login</a>
            </li>
            <li className="p-4">
            <form action="/auth/logout" method="post">
            <button className="p-4">Sign Out</button>
            </form>
            </li>

        </ul>
    </nav>
  )
}
