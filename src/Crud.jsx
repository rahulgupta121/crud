import React from "react";
import { useState } from "react";
import axios from "axios";
const Crud = () => {
  const [empName, setEmpName] = useState();
  const [jobTitle, setjobTitle] = useState();

  const handleClick = (e) => {
    console.log("Butoon Click");
    e.preventDefault();

    axios
      .post("https://reqres.in/api/users", {
        empName: empName,
        jobTitle: jobTitle,
      })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.empName);
        console.log(response.data.jobTitle);
        //sessionStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      className="container  bg-light mt-5"
      style={{
        width: "40%",
        height: "50%",
        justifyContent: "center",
        borderRadius: "4px",
      }}
    >
      <form style={{ height: "50%" }}>
        <div className="form-group bg-light">
          <label
            className="form-check-label "
            htmlFor="exampleCheck1"
            style={{
              padding: "2px",
              marginTop: "25px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Enter Employee Name
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="exampleInputEmail1"
            placeholder="Enter Emp Name"
            value={empName}
            onChange={(e) => {
              setEmpName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              padding: "2px",
            }}
          >
            Enter Job Title
          </label>
          <input
            type="text"
            className="form-control border-dark"
            id="exampleInputEmail1"
            placeholder="Enter Job Title"
            value={jobTitle}
            onChange={(e) => {
              setjobTitle(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-dark  "
            style={{ marginBottom: "15px", fontWeight: "2px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Crud;
