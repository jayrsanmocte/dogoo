      import React, { useEffect, useRef } from 'react';



      const About = () => {

        const getInRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#getin') {
      getInRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

        const employees = [
          {
            name: 'Mc. Dharnel Peralta Pagaragan',
            position: 'Dog Adoption Specialist',
            bio:
              'Mc is a DOG with several years of experience in animal welfare. He is passionate about finding the perfect homes for our furry friends and providing support to new dog owners.',
            photo: 'Videos/mc.gif',
          },
          {
            name: 'Jay-r Palabrica San Mocte ',
            position: 'Dog Behaviorist',
            bio:
              'Jay has a deep understanding of dog behavior and training techniques. She works closely with our adopters to ensure a smooth transition and provides guidance on dog training and socialization.',
            photo: 'Videos/jay.gif',
          },
          // Add more employees here
        ];

        return (
          <>
      <div className="container mt-5">

          <div className="row">
              <div>
                  <div className="row p-0">
                      <div className="col-6">
                      <h1 className='aboutWelcome'>Welcome to Our Dog <span style={{color: 'rgba(252,176,66,255)'}}>Adoption and Information</span> Center!</h1>
                      <p>
                          At our company, we are passionate about dog adoption and providing loving homes to
                          deserving dogs. We believe that every dog deserves a chance to be part of a caring
                          family.
                      </p>
                      </div>

                      <div className="col-6 overflow">
                          <div className="row">
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About6.jpg" alt="" />
                              </div>
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About1.jpg" alt="" />
                              </div>
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About2.jpg" alt="" />
                              </div>
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About3.jpg" alt="" />
                              </div>
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About4.jpg" alt="" />
                              </div>
                              <div className='col-4 aboutImageBox'>
                                  <img className='aboutImage mt-3' src="/Images/About/About5.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              </div>
              
      {/* <hr />    */}

            <div className="container">
            <div className="aboutUs text-center">
              <h2 className='aboutUsh2'><span style={{color: 'rgba(252,176,66,255)'}}>About</span> Us</h2>
              <p>
                  Our company is dedicated to connecting abandoned, rescued, and surrendered dogs with responsible and loving owners. We work closely with local shelters, rescue groups, and dog foster homes to provide a safe haven for dogs in need. Our adoption process is thorough, involving a detailed application, home visits, interviews, and reference checks to ensure the best match between dogs and potential adopters. Upon rescue or admission into our program, each dog undergoes a comprehensive medical examination, including vaccinations, deworming, and spaying or neutering.
              </p>
            </div>
            
            <section className='mt-5'>
              <div className="row">
                  <div className="col-6">
                      <div className="vision text-center">
                          <h2 className='visionh2'>Vision</h2>
                              <p>
                                  Our vision is to create a world where every dog has a loving home and is treated with
                                  compassion and respect. We strive to educate the community about responsible pet ownership
                                  and the importance of adoption.
                              </p>
                      </div>
                  </div>
            
            <div className="col-6">
              <div className="mission text-center">
                  <h2 className='missionh2'>Mission</h2>
                      <p>
                          Our mission is to match each dog with the perfect family, ensuring a lifelong bond. We
                          provide comprehensive adoption services, including thorough vetting of potential adopters,
                          behavioral assessments, and post-adoption support.
                      </p>
              </div>
            </div>
          </div>
      </section>
            </div>
            <div className='container-fluid'><img  src='/Images/school-divider.png' alt="" id='imagelogo'/></div>
            <div >
              <div className="container">
              <div className="text-center">
                      <h2 className='touchh2 my-5'>Get in <span style={{color: 'rgba(252,176,66,255)'}}>Touch</span></h2>
                      <p>
                          If you're ready to open your heart and home to a furry friend, we encourage you to visit our adoption and information center. Our dedicated team will guide you through the adoption process, answer any questions you may have, and ensure a smooth transition for both you and your new companion. Remember, when you adopt a pet, you're not just adding a furry member to your family; you're also saving a life and creating a lifelong bond. So, take the leap of love and visit us today – your perfect companion is waiting to meet you!
                      </p>
                      <p>
                          Visit our adoption and information center if you're ready to open your heart and home to a furry friend. Our dedicated team will guide you through the adoption process and ensure a smooth transition for both you and your new companion, saving a life and creating a lifelong bond.
                      </p>
                      <p>
                      
                        Contact us today to learn more about our available dogs and how you can make a difference
                        in a dog's life through adoption.
                      </p>
                      <div id="getin" ref={getInRef}></div>
                    </div>
              </div>
      </div>  
     
          
      
       
     
      
            <div className="container">
            <div className='text-center'>
              <h2 className='meetTeamh2 my-4'>Meet Our <span style={{color: 'rgba(252,176,66,255)'}}>Team</span></h2>
          </div>
          <div className="row">
          {employees.map((employee) => (
            <div className="col-6 "key={employee.name}>
              <div className="profBox">
                
                  <div >
                    <img className='gif my-5' src={employee.photo} alt={employee.name} />
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                    <p>{employee.bio}</p>
                  </div>
                
              </div>
            </div>
            ))}
          </div>
            </div>



      </>
   
        );
      };

      export default About;
