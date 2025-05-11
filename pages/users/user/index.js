import Spinner from '@/components/shared/Spinner';
import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        fetch("https://randomuser.me/api/?seed=john&results=1").then(res => res.json()).then(data => { console.log("User: ", data); setUser(data.results[0]) }).catch((e) => console.error(e))
    })


    return (
        <main className='flex items-center justify-center w-full h-dvh'>
            {user ? (
                <div className="flex flex-col gap-y-4 items-center w-lg bg-white shadow-lg px-5 py-6 rounded-lg">
                    <img src={user.picture.large} alt="User picture" className={`mt-8 size-40 rounded-full border-2 p-1 ${user.gender === "female" ? "border-pink-400" : "border-blue-400"}`} />
                    <p className='text-gray-400'>Hi, my name is</p>
                    <p className='text-2xl'>{user ? Object.values(user.name).join(" ") : ""}</p>
                </div>
            ) : <Spinner />}

        </main>
    )
}

export default User
