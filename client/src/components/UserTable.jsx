import React, { useState, useEffect } from "react";
import fetchData from "../helpers/api";
import { useParams } from "react-router-dom";
import "../styles/UserTable.css";

/**
 * display user information
 * @returns {component}
 */
const User = () => {
  // take id from url
  const { id } = useParams();
  // keep user data
  const [user, setUser] = useState({});
  // format date
  const updatedOnDate = new Date().toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  // get user data by its id
  useEffect(() => {
    (async () => {
      const { data } = await fetchData("get", `${id}`);
      setUser(data);
    })();
  }, [id]);

  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>{user.owner}</td>
          </tr>
          <tr>
            <td>Created On</td>
            <td>{user.createdOn}</td>
          </tr>
          <tr>
            <td>Updated On</td>
            <td>{updatedOnDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default User;
