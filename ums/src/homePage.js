import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const fetchedData = await axios.get("http://localhost:5000/users");
    setUsers(fetchedData.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <h2 className="mt-5">User Management System</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Website</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>
                  <Link
                    exact="true"
                    to={`/viewUser/${user.id}`}
                    className="btn py-0 btn-primary me-3">
                    View
                  </Link>
                  <Link
                    exact="true"
                    to={`/editUser/${user.id}`}
                    className="btn py-0 btn-secondary me-3">
                    Edit
                  </Link>
                  <button
                    onClick={async () => {
                      await axios.delete(
                        `http://localhost:5000/users/${user.id}`
                      );
                      getData();
                    }}
                    className="btn py-0 btn-danger me-3">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Homepage;
