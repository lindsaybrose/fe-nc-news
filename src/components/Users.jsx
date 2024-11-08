import React from "react";
import { getUsers } from "../../api";

function Users(username) {
  let users = [];
  getUsers(username).then((data) => {
    data.map((info) => users.push(info.username));
  });
  return <p>{users}</p>;
}

export default Users;
