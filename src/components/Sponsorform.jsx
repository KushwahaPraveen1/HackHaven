import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Sponsorform.css';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sponsorform() {
    const[cname,setCname]=React.useState('');
    const[info,setinfo]=React.useState('');
    const[email,setemail]=React.useState('');
    const[minFund,setminFund]=React.useState('');
    const[contact,setcontact]=React.useState('');
    const[evaluation,setevaluation]=React.useState('');
    const[eventsponsored,seteventsponsored]=React.useState('');
    const[website,setwebsite]=React.useState('');
    const[linkedin,setlinkedin]=React.useState('');

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
          .post("https://sponsure.onrender.com/createsponsor", {
                 cname:cname,
                 info:info,
                email:email,
                minFund:Number(minFund),
                evaluation:Number(evaluation),
                eventsponsored:Number(eventsponsored),
                website:website,
                linkedin:linkedin,
                contact:Number(contact)

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
    <div className='abc'>
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
    <h1>Sponsor Details</h1>
    </div>
    <div className="sponsor_form_heading">
       
     <Box
    className="sponsor_form_main"
      component="form"
      sx={{
        '& .MuiTextField-root': { m:2, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className="company_name">
            <TextField
          id="filled-multiline-static"
          label="Company Name"
          multiline
          rows={1}
          value={cname}
          onChange={(e) => {
              setCname(e.target.value);
             }}
          variant="filled"
        />
      </div>

      <div className="company_info">
      {/* <p>Company Information :</p>   */}
        <TextField
          id="filled-multiline-static"
          label="Company Information"
          multiline
          rows={3}
          value={info}
          onChange={(e) => {
              setinfo(e.target.value);
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
        '& .MuiTextField-root': { m:2, width: '48ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
    <div className='sponsor_contact'>
      <TextField id="filled-basic" label="Contact Number" variant="filled" value={contact}
          onChange={(e) => {
              setcontact(e.target.value);
             }}/>
      <TextField id="filled-basic" label="Email" variant="filled" value={email}
          onChange={(e) => {
              setemail(e.target.value);
             }}/>
      </div>
    
      </Box>
<div className="sponsor_fig">
      <Box
    className="sponsor_form_main3"
      component="form"
      sx={{
        '& .MuiTextField-root': { m:2, width: '30.7ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className='sponsor_figures'>
      <TextField id="filled-basic" label="Company Evaluation" variant="filled" value={evaluation}
          onChange={(e) => {
              setevaluation(e.target.value);
             }}/>
      <TextField id="filled-basic" label="No. of Sponsored Events" variant="filled" value={eventsponsored}
          onChange={(e) => {
              seteventsponsored(e.target.value);
             }}/>
      <TextField id="filled-basic" label="Minimum Fund" variant="filled" value={minFund}
          onChange={(e) => {
              setminFund(e.target.value);
             }}/>
      </div>
    
      </Box>
      </div>



      <Box
    className="sponsor_form_main3"
      component="form"
      sx={{
        '& .MuiTextField-root': { m:2, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField id="filled-basic" label="Website" variant="filled" value={website}
          onChange={(e) => {
              setwebsite(e.target.value);
             }} />
           </Box>
           <Box
    className="sponsor_form_main3"
      component="form"
      sx={{
        '& .MuiTextField-root': { m:2, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField id="filled-basic" label="Linkedin" variant="filled" value={linkedin}
          onChange={(e) => {
              setlinkedin(e.target.value);
             }}/>
           </Box>
           <Button variant="contained" onClick={register} className='submit_button'>Submit</Button>
           
           </div>
           </div>
           
      </>

     
   
  );
}