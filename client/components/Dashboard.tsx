"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const {data: session} = useSession();
  return (
    <>
    {session ? <div className='pattern bg-golden min-h-screen text-white'>
    <h1 className="text-2xl text-orange-500 font-bold my-10 bg-secondary mx-10 break-words flex">Welcome back home</h1>
    <button onClick={() => signOut({callbackUrl:"/dashboard"})} className="text-white ripple bg-primary border px-5 mx-5 rounded py-3">Sign out</button>
    <div className="bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
  This box adapts to the theme!
</div>

    <span className="text w-10 h-10  rounded-full border-t-2 animate-spin"></span>
    {JSON.stringify(session)}
    </div> : <>
    <h1 className="text-2xl">You are not login </h1>
    <button onClick={() => signIn("google")} className="text-white ripple bg-blue-500 border px-5 mx-5 rounded py-3">Sign in with google</button>
    <button onClick={() => signIn("github")} className="text-white bg-red-500 border px-5 mx-5 rounded py-3">Sign in with github</button>
    </>}
    </>
  )
}

export default Dashboard