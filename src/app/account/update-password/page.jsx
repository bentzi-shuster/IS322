"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useState } from 'react'
// await supabase.auth.updateUser({ password: new_password })
    
async function updatePWD(password, confirmPassword){
if(password !== confirmPassword){
  alert("passwords don't match")
  return
}
let supabase = createClientComponentClient()
let data =  await supabase.auth.updateUser({ password: password })
console.log(data)
if(!data.error){
  console.log("password updated");
    // redirect to login
    window.location.href = '/login'
}else{
  console.log("password not updated");
  alert(data.error.message)
}
}
export const ResetPWDPage = () => {
    let [password, setPassword] =useState('')
    let [confirmPassword, setConfirmPassword] =useState('')
  return (
    <>
    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />

    <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} />
    <button
    onClick={()=>updatePWD(password, confirmPassword)}
    
    >Reset Password</button>    
    
    </>
  )
}

export default ResetPWDPage