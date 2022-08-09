import React from "react";
import Card from "../UI/Card";

const AddUser = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">UserName</label>
        <input id="age" type="number" />
        <button type="submit" onClick={addUserHandler}>
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
