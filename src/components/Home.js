import React, { useState } from 'react'
import validator from 'validator';

function Home(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [city,setCity]=useState('');
    const [domain,setDomain]=useState('Select your Domain');
    const [checkSubmit,setChecksubmit]=useState(false);
    // const [errormsg,setErrormsg]=useState('');

    function validateForm (){
      if(!validator.isEmail(email))
      {
        alert('Email is Invalid');
        return;
      }
      if(!validator.isMobilePhone(mobile))
      {
        alert('Mobile number is Invalid');
        return;
      }
      for(let i=0;i<mobile.length;i++)
      {
        if(mobile[i]-'0'<0 || mobile[i]-'0'>9)
        {
          alert('Mobile number is Invalid');
          return;
        }
      }
        setChecksubmit(true);
    }
  return (
    <>
    {!checkSubmit && (
      <>
      <div>
        <h2>Fill the form below to join us.</h2>
      </div>
      <form onSubmit={validateForm}>
      <input type="text" 
      placeholder='name' 
      value={name}
      onChange={(ev)=>{setName(ev.target.value)}}
      required/>
      <input type="email" 
      placeholder='email' 
      value={email}
      onChange={(ev)=>{setEmail(ev.target.value)}}
      required/>
      <input type="text"
      placeholder='Mobile No.' 
      value={mobile} 
      onChange={(ev)=>{setMobile(ev.target.value)}}
      required/>
      <input type="text" 
      placeholder='City'
      value={city}
      onChange={(ev)=>{setCity(ev.target.value)}}
      required/>
      <select onChange={(ev)=>setDomain(ev.target.value)} required>
        <option value="" disabled selected> Choose Your Domain</option>
        <option value="Data Science">Data Science</option>
        <option value="React js">React js</option>
        <option value="Node js ">Node js</option>
        <option value="DevOps">DevOps</option>
        <option value="Data Engineering">Data Engineering</option>
      </select>
      <button>Submit</button>
  </form></>
    )}
    {checkSubmit && (
      <>
      <div>
        <h2>Thanks for Filling the form  <br />We'll reach out to you soon.</h2>
      </div>
      <div className="display">
        <p><b>Name : </b> {name}</p>
        <p><b>Email : </b> {email}</p>
        <p><b>Mobile : </b> {mobile}</p>
        <p><b>City : </b> {city}</p>
        <p><b>Domain : </b>{domain}</p>
      </div>
      </>
    )}
    </>
  )
}

export default Home;