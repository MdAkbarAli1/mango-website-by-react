import React, { useState } from "react";
import "./cmpt.css";
function Cmpt() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const inputsHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //  console.log(e.target.value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);

    setInputs({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container1" >
      <form onSubmit={submitHandler}>
        <h3>
          <marquee
            direction="up"
            scrollamount="1"
            style={{ textAlign: "center", padding: "6px 0px" }}
          >
            {" "}
            Are You Hungry.......🤔
          </marquee>{" "}
        </h3>
        <h2 className="head" style={{ textAlign: "center" }}>Registration Form</h2>
        <div className="inputt">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Full name"
            name="fullName"
            value={inputs.fullName}
            onChange={inputsHandler}
            required
          />
        </div>

        <div className="inputt">
          <label>Enter email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={inputs.email}
            onChange={inputsHandler}
            required
          />
        </div>

        <div className="inputt">
          <label>Enter Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={inputs.password}
            onChange={inputsHandler}
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Cmpt;
