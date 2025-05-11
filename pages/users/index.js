import Spinner from '@/components/shared/Spinner';
import React, { useEffect, useState } from 'react'


const UserComponent = ({ user }) => {
    const completeName = Object.values(user.name).join(" ");

    return (
        <div
            className={`flex gap-x-4 items-center border border-1 shadow-sm w-lg p-4 rounded-lg ${user.gender === "female" ? "border-pink-300" : "border-blue-200"
                }`}
        >
            <img
                src={user.picture.thumbnail}
                alt={`${user.name.first}'s image`}
                className="rounded-full"
            />
            <p>{completeName}</p>
        </div>
    );
};

const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://randomuser.me/api/?results=5")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setUsers(data.results);
                })
                .catch((e) => {
                    console.error(e);
                })
                .finally(setIsLoading(false));
        }, [3000]);
    }, []);

    return (
        <main className="flex flex-col items-center justify-center w-full h-dvh gap-y-3">
            {isLoading ? (
                <Spinner />
            ) : (
                users.map((user) => <UserComponent user={user} key={user.email} />)
            )}
        </main>
    )
}

export default Users
