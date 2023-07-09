import React, { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import image1 from "../assets/Frame 1.png";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

function Loginevent() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function register(e) {
    e.preventDefault();
    axios
      .post(".........", {
       email: email,
       password: password
        
      })
      .then((result) => {
        toast.success(`Login Successfull`);
        console.log(result);
      })

      .catch((err) => {
        toast.error(`Failed`);
        console.log(err);
      });
  }
  return (
    <>
      <div className="login_main">
      <ToastContainer
          position="top-right"
          autoClose={4000}
          limit={5}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="login_text_div">
          <div className="login_image_div">
            <img src={image1} alt="image1" className="login_image" />
          </div>
          <div className="login_div">
            <h1>Login</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "40ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "40ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <div className="login_forgot_div">
              <div>
                <span>
                  <input type="checkbox" className="login_checkbox" /> Remember
                </span>{" "}
              </div>

              <div>
                <span className="login_forgot">Forgot Password?</span>
              </div>
            </div>
            <div className="login_button_div">
              <Button variant="contained" className="login_button" onClick={register}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginevent;
