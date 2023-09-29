import Post from "@/components/Post";

export default function Home() {
  return (
    <>
    <div
    // glassmorphism centered
    className="
    flex
    justify-center
    items-center
    bg-[rgba(255,255,255,0.5)]
    bg-blur-lg
    mx-auto
w-1/2
px-4
py-2
rounded-md
my-4
    "
    >
    <h1 className="text-2xl">Let Him Cook</h1>
    </div>
    
    
        <Post comments={["hi mom"]} date={Date.now()} likes={19} title={"test"}  userobj={{name:"joe biden"}} bgImgUrl="/chicken-empanadas-de-pollo-3029662-hero-01-b9c7760ffda1421cabd946b9ab74ebc8-761863022.jpg" bgImgAlt="temp"/>

    </>
  )
}
