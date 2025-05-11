import React, { useState, useEffect } from "react";
import Spinner from "../shared/Spinner";

function UseEffectDataFetching() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const UserComponent = ({ user }) => {
    const completeName = Object.values(user.name).join(" ");

    return (
      <div
        className={`flex gap-x-4 items-center border border-1 shadow-sm w-lg p-4 rounded-lg ${
          user.gender === "female" ? "border-pink-300" : "border-blue-200"
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

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    console.log("User:", users);
  }, [users]);
  return (
    <div className="flex flex-col gap-y-3">
      {isLoading ? (
        <Spinner />
      ) : (
        users.map((user) => <UserComponent user={user} key={user.email} />)
      )}
    </div>
  );
}

export default UseEffectDataFetching;
