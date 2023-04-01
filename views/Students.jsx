import React, { Component } from "react";

const studentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const tableStyle = {
  border: "1px solid black",
};

export class Students extends Component {
  render() {
    const students = this.props.students;
    // console.log(students);
    return (
      <div style={studentStyle}>
        <h3>
          <a href="/students/new">Add New Student Data</a>
        </h3>
        <table style={tableStyle}>
          <tr>
            <th>Student Data</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
          {students.map((student, key) => {
            return (
              <tr key={key}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

module.exports = Students;
