
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Sponsorform from './Sponsorform'
import Eventform from './Organiser'
import Sponserlist from './Sponserlist' 
import Loginevent from './Loginevent'
import Loginsponsor from './Loginsponsor'
import Registerevent from './Registerevent'
import Registersponsor from './Registersponsor'



const Routers = () => {


 
  return (
   <Router>
    <Routes>
      
      <Route path='/sponsor' element = {<Sponsorform />} />      
      <Route path='/event' element = {<Eventform />} /> 
      <Route path='/sponsorlist' element = {<Sponserlist />} />  
      <Route path='/loginevent' element = {<Loginevent />} /> 
      <Route path='/loginsponsor' element = {<Loginsponsor />} />   
      <Route path='/registerevent' element = {<Registerevent />} /> 
      <Route path='/registersponsor' element = {<Registersponsor />} />   
      
  </Routes>
   </Router>
 
  )
}

export default Routers