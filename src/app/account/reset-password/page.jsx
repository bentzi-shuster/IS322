import Form from '@/components/Form'
import React from 'react'

 const ResetPWD = () => {
    const formData = [
        {
          type: "text",
          label: "Email to reset",
          name: "email",
        },
        {
          type: "button",
          value: "Submit",
          formAction: null,
          btnType: "submit",
        },
    ]
    const jsonData = {
        action: "/account/forgot-password",
        method: "POST",   
        title: "Reset Password",
        formdata: formData,
      };
      
  return (
<>
<style dangerouslySetInnerHTML={{__html: `
footer{
    display: none!important;
}
`}}></style>
<Form 
data={jsonData}
/>

</>
  )
}
export default ResetPWD