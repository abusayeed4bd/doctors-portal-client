import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRaw from './UserRaw';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div>
      <h2 className="text-5xl text-primary">All Users :{users.length}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>Make Admin</th>
            <th>Remove User</th>
           
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <UserRaw user={user} index={index} key={user._id}></UserRaw> )
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
