import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="userList">Loading...</div>;
  }

  if (error) {
    return <div className="userList">Error: {error}</div>;
  }

  return (
    <div className="userList">
      <h1>User List</h1>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.avatar} alt={user.name} />
            <div className="user-details">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
