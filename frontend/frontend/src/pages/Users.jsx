import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
          const res = await axios.get("http://127.0.0.1:8080/user");
          console.log(res.data);
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://127.0.0.1:8080/user/delete/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div>
      <h1>Users</h1>
        <div className="users">
          {users.map((user) => (
            <div className="user" key={user.id}>
              <h2>{user.firstName} {user.lastName}</h2>
                  <p>{user.emailId}</p>
                  <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                  <button className="update"><Link to={`/update/${user.id}`}>Update</Link></button>
            </div>
          ))}
              <button><Link to="/add">Add new user</Link></button>
        </div>
    </div>
  );
};

export default Users;
