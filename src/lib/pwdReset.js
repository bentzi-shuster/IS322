export async function resetPWD(supabase){
   let data = await supabase.auth.resetPasswordForEmail(prompt("email"), {
      redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL+'/auth/callback?next=/account/update-password',
    })
    console.log(data)
  }