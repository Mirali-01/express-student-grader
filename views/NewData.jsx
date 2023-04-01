import React, { Component } from "react";

export class NewData extends Component {
  render() {
    return (
      <div>
        <h1>New Student Data</h1>
        <form action="/students" method="POST">
          <input type="text" name="name" placeholder="Enter Student Name" />
          <input type="text" name="grade" placeholder="Enter Student Grade" />
          <input type="submit" value="Create Student Data" />
        </form>
      </div>
    );
  }
}

module.exports = NewData;
