import React from 'react'
import './styles.css'
export const page = () => {
  return (<>

    <div className="justify-center items-center !h-[47em] hidden lg:flex">
    <div className="mockup-phone h-full !w-[23em]">
  <div className="camera"></div> 
  <div className="display h-full">
    <div className="phone-1 h-full">
    
    <iframe src="/" className="w-full h-full" />

    
    </div>
  </div>
</div>
</div>
    <div className="flex flex-col justify-center items-center h-3/4 lg:hidden">
    <h1 className="text-3xl font-bold">This is not meant for mobile</h1>
    <p className="text-xl font-bold">This page is a demo of the mobile version of the site that can be seen on desktop</p>
    <p className="text-xl font-bold">To go back to the home page, click <a href="/">here</a>
    </p>
    </div>

    </>
  )
}
export default page
