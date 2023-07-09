import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Sponsorform.css";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function Eventform() {
  const [ename, setEname] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [email, setemail] = React.useState("");
  const [domain, setdomain] = React.useState("");
  const [evaluation, setevaluation] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [prizepool, setprizepool] = React.useState("");
  const [reach, setreach] = React.useState("");
  
  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  async function register(e) {
    e.preventDefault();
    axios
      .post("https://sponsure.onrender.com/createevent", {
        ename: ename,
        domain: domain,
        purpose: purpose,
        date: date,
        venue: venue,
        reach: reach,
        email: email,
        prizepool: prizepool,
      })
      .then((result) => {
        toast.success(`SponserShip Listed`);
        console.log(result);
      })

      .catch((err) => {
        toast.error(`Failed`);
        console.log(err);
      });
  }

  return (
    <>
      <div className="abc">
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
        <div className="Sponsorr">
          <div className="sponsor_form_heading">
            <h1>Event Details</h1>
          </div>
          <div className="sponsor_form_heading">
            <Box
              className="sponsor_form_main"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "100ch" },
              }}
              noValidate
              autoComplete="off">
              <div className="company_name">
                <TextField
                  id="filled-multiline-static"
                  label="Event Name"
                  multiline
                  rows={1}
                  value={ename}
                  onChange={(e) => {
                    setEname(e.target.value);
                  }}
                  variant="filled"
                />
              </div>

              <div className="company_info">
                {/* <p>Company Information :</p>   */}
                <TextField
                  id="filled-multiline-static"
                  label="Event Details"
                  multiline
                  rows={3}
                  value={purpose}
                  onChange={(e) => {
                    setPurpose(e.target.value);
                  }}
                  variant="filled"
                />
              </div>
            </Box>
          </div>
          <Box
            className="sponsor_form_main2"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "48ch" },
            }}
            noValidate
            autoComplete="off">
            <div className="sponsor_contact">
              <TextField
                id="filled-basic"
                label="Domain"
                variant="filled"
                value={domain}
                onChange={(e) => {
                  setdomain(e.target.value);
                }}
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
          </Box>
          <div className="sponsor_fig">
            <Box
              className="sponsor_form_main3"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "30.7ch" },
              }}
              noValidate
              autoComplete="off">
              <div className="sponsor_figures">
                <TextField
                  id="filled-basic"
                  label="Crowd Reach"
                  variant="filled"
                  value={reach}
                  onChange={(e) => {
                    setreach(e.target.value);
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </Box>
          </div>

          <Box
            className="sponsor_form_main3"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "100ch" },
            }}
            noValidate
            autoComplete="off">
            <TextField
              id="filled-basic"
              label="Venue"
              variant="filled"
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value);
              }}
            />
          </Box>
          <Box
            className="sponsor_form_main3"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "100ch" },
            }}
            noValidate
            autoComplete="off">
            <FormControl sx={{ m: 2, width: "40ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Prize Pool
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                value={prizepool}
                onChange={(e) => {
                  setprizepool(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Button variant="contained" onClick={register} className='submit_button'>Submit</Button>
        </div>
      </div>
       
    </>
  );
}
