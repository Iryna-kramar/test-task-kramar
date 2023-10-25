import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/reducers/usersSlice";
import { AppDispatch } from "../store";

function Users() {
  const allUsers = useSelector((state: any) => state.users.data);
  const dispatch = useDispatch<AppDispatch>();
  console.log(allUsers, "allUsers");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users data</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>birthday_date</th>
            <th>phone_number</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user: any, id: number) => {
            return (
              <tr key={id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.birthday_date}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
