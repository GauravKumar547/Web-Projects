import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: " ",
    username: "",
    email: " ",
    name: "",
    website: " ",
    phone: "",
  });
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const fetched = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(fetched.data);
  };
  const { id, username, email, name, website, phone } = user;
  return (
    <div className="container pb-1 bg-info mt-5 w-50">
      <h2>Showing details of user : {userId}</h2>
      <Table striped bordered hover variant="dark" className="mx-auto mt-3">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User ID:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>UserName:</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{website}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <NavLink exact="true" to="/" className="btn btn-danger w-100">
                Go to Home Page
              </NavLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ViewUser;
