import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    name: "",
    website: "",
    phone: "",
  });
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const fetched = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(fetched.data);
  };

  const changeData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const nav = useNavigate();
  const updateData = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:5000/users/${userId}`, user);
    nav({ pathname: "/" });
  };
  return (
    <div className=" py-3 mt-5 w-50 bg-dark bg-gradient container shadow">
      <h1 className="mb-3 text-white"> Add User</h1>
      <form onSubmit={(event) => updateData(event)}>
        <input
          className="form-control mb-3"
          type="number"
          placeholder="Enter your ID"
          name="id"
          required
          value={user.id}
          onChange={(event) => changeData(event)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your name"
          name="name"
          required
          value={user.name}
          onChange={(event) => changeData(event)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your username"
          name="username"
          required
          value={user.username}
          onChange={(event) => changeData(event)}
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter your email"
          name="email"
          required
          value={user.email}
          onChange={(event) => changeData(event)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your phone"
          name="phone"
          required
          value={user.phone}
          onChange={(event) => changeData(event)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter your Website"
          name="website"
          required
          value={user.website}
          onChange={(event) => changeData(event)}
        />
        <input
          className="w-100 btn-primary bg-gradient text-center mb-2 btn"
          type="submit"
          value="Update"
        />
      </form>
      <button
        onClick={() => {
          nav({ pathname: "/" });
        }}
        className="btn text-white btn-danger w-100">
        Go to Home Page
      </button>
    </div>
  );
};

export default Edituser;
