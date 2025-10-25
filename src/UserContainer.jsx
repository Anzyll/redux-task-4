import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./Redux";

const UserContainer = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>User Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserContainer;
