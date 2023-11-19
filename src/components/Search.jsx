"use client";
import { useEffect, useRef, useState } from "react";
import { useFormState } from 'react-dom'
import Post from "./Post";
export default function Search ({SearchAction}) {
    let result ={} 
const [state, formAction] = useFormState(SearchAction,result);
  return (
    <>

    <form action={formAction}>
    <input type="text" placeholder="Search" className="border-2 border-gray-300 p-2 rounded-lg w-full" name="query" />
    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
    </form>
    <div>{state && state.data && state.data.length > 0 ? (
    <ul>
    {state.data.map((post) => (<>
      <li className="p-4">
        <Post key={post.id} post={post} showCheckbox={false}/>
      </li>
        </>
    ))}
    </ul>
    ) : (
    <p>No posts found.</p>
    )}</div>
            
    </>
  )
}
