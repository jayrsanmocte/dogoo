  import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

  const ApplicantsInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [status, setStatus] = useState('');
    const [occupation, setOccupation] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const [promptedToAdopt, setPromptedToAdopt] = useState('');
    const [adoptedBefore, setAdoptedBefore] = useState('');
    const [alternateContactFirstName, setAlternateContactFirstName] = useState('');
    const [alternateContactLastName, setAlternateContactLastName] = useState('');
    const [alternateContactPhone, setAlternateContactPhone] = useState('');
    const [alternateContactEmail, setAlternateContactEmail] = useState('');
    // ... other form fields and their respective state variables
    const location = useLocation();
    const [name, setName] = useState('');
  
    useEffect(() => {
      const path = location.pathname;
      const nameFromPath = path.substring(path.lastIndexOf('/') + 1);
      const decodedName = decodeURIComponent(nameFromPath);
      setName(decodedName);
    }, [location.pathname]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
     
    <div className="container mt-5 warrior">
        <h2 className='appss mt-5'>APPLICANT'S INFO</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}

         
              <h4 className='nam mt-5'>Name*</h4>
                <div className="row">
                      <div className="col">
                            <label htmlFor="firstName">First</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder="First"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required/>
                          </div>
                          <div className="col">
                            <label htmlFor="lastName">Last</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="Last"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                            />
                          </div>
                  </div>

                    {/* Address */}
                    <h4 className='adds'>Address*</h4>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  <div className="row mt-3">
                           {/* Phone */}
                      <div className="col">
                                      <h4>Phone*</h4>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phone"
                                  placeholder="Phone"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                />
                           </div>
                    
                          <div className="col">
                            {/* Email */}
                            <h4>Email*</h4>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                          </div>
                  </div>
                     {/* Birth Date */}
                    <div className="row">
                      <div className="col">
                            <h4>Birth Date*</h4>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="birthDate"
                                  placeholder="Birth Date"
                                  value={birthDate}
                                  onChange={(e) => setBirthDate(e.target.value)}
                                  required
                                />
                         </div>
                        
                          <div className="col">
                                {/* Status */}
                                <h4>Status*</h4>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="status"
                                      id="singleStatus"
                                      value="Single"
                                      checked={status === "Single"}
                                      onChange={() => setStatus("Single")}
                                    />
                                    <label className="form-check-label" htmlFor="singleStatus">Single</label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="status"
                                      id="marriedStatus"
                                      value="Married"
                                      checked={status === "Married"}
                                      onChange={() => setStatus("Married")}
                                    />
                                    <label className="form-check-label" htmlFor="marriedStatus">Married</label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="status"
                                      id="othersStatus"
                                      value="Others"
                                      checked={status === "Others"}
                                      onChange={() => setStatus("Others")}
                                    />
                                    <label className="form-check-label" htmlFor="othersStatus">Others</label>
                                  </div>
                          </div>
                                                    
                      </div>
                   
                   
                  
                                <div className="row">
                                         <div className="col"> 
                                                {/* Occupation */}
                                                <label htmlFor="occupation">Occupation</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="occupation"
                                                placeholder="Please type N/A if unemployed"
                                                value={occupation}
                                                onChange={(e) => setOccupation(e.target.value)}
                                              />
                                         </div>

                                        <div className="col">
                                              {/* Social Media */}
                                              <label htmlFor="socialMedia">Social Media</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="socialMedia"
                                                placeholder="Please type N/A if no social media"
                                                value={socialMedia}
                                                onChange={(e) => setSocialMedia(e.target.value)}
                                              />
                                        </div>
                                </div>

           

                  {/* Prompted to Adopt */}
                  <h4>Selected Dog's Name:</h4>
                  <input  className="form-control" type="text"value={name} disabled />
                 
                  <h4>What prompted you to adopt from PAWS?*</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promptedToAdopt"
                      id="friendsPrompt"
                      value="Friends"
                      checked={promptedToAdopt === "Friends"}
                      onChange={() => setPromptedToAdopt("Friends")}
                    />
                    <label className="form-check-label" htmlFor="friendsPrompt">Friends</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promptedToAdopt"
                      id="websitePrompt"
                      value="Website"
                      checked={promptedToAdopt === "Website"}
                      onChange={() => setPromptedToAdopt("Website")}
                    />
                    <label className="form-check-label" htmlFor="websitePrompt">Website</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promptedToAdopt"
                      id="socialMediaPrompt"
                      value="Social Media"
                      checked={promptedToAdopt === "Social Media"}
                      onChange={() => setPromptedToAdopt("Social Media")}
                    />
                    <label className="form-check-label" htmlFor="socialMediaPrompt">Social Media</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promptedToAdopt"
                      id="otherPrompt"
                      value="Other"
                      checked={promptedToAdopt === "Other"}
                      onChange={() => setPromptedToAdopt("Other")}
                    />
                    <label className="form-check-label" htmlFor="otherPrompt">Other</label>
                  </div>

                  {/* Adopted Before */}
                  <h4>Have you adopted from PAWS before?*</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="adoptedBefore"
                      id="yesAdoptedBefore"
                      value="Yes"
                      checked={adoptedBefore === "Yes"}
                      onChange={() => setAdoptedBefore("Yes")}
                    />
                    <label className="form-check-label" htmlFor="yesAdoptedBefore">Yes</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="adoptedBefore"
                      id="noAdoptedBefore"
                      value="No"
                      checked={adoptedBefore === "No"}
                      onChange={() => setAdoptedBefore("No")}
                    />
                    <label className="form-check-label" htmlFor="noAdoptedBefore">No</label>
                  </div>
                  
                  {/* Alternate Contact */}
                  <h4>Alternate Contact*</h4>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="alternateContactFirstName">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="alternateContactFirstName"
                        placeholder="First"
                        value={alternateContactFirstName}
                        onChange={(e) => setAlternateContactFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="alternateContactLastName">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="alternateContactLastName"
                        placeholder="Last"
                        value={alternateContactLastName}
                        onChange={(e) => setAlternateContactLastName(e.target.value)}
                        required
                      />
                      
                    </div>

                    <h4>Phone*</h4>
                  <input
                    type="tel"
                    className="form-control"
                    id="alternateContactPhone"
                    placeholder="Phone"
                    value={alternateContactPhone}
                    onChange={(e) => setAlternateContactPhone(e.target.value)}
                    required
                  />

                  {/* Alternate Contact Email */}
                  <h4>Email*</h4>
                  <input
                    type="email"
                    className="form-control"
                    id="alternateContactEmail"
                    placeholder="Email"
                    value={alternateContactEmail}
                    onChange={(e) => setAlternateContactEmail(e.target.value)}
                    required
                  />
                  <div className='buto'>
                    <button type="submit" className="btn btn-custom2 mt-3 ">Submit</button>
                      </div>
                  </div>
          {/* Alternate Contact Phone */}
          

          {/* ... other form fields */}

          
        </form>
      </div>
    
     
    );
  };

  export default ApplicantsInfo;
