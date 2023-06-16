import React from 'react';

const Footer = () => {
    return (
<>
        <div className='sige' id="footer">
        <div> <img src='/Images/footer.png' alt="Description of the image" id='imagelogo'/>
        </div>
    
    <div className="bg-custom text-center text-lg-start text-black">
        <div className="container p-4">
                <div className="row my-4">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="rounded-circle bg-custom1 shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                    <img src="https://media.tenor.com/ijffyjt8WKYAAAAj/dog-twerk.gif" height="100" alt="" loading="lazy" />
                </div>
                <p className="text-center">Dogs have a remarkable ability to understand human emotions and can provide comfort and support during challenging times</p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                    <li>
                    <a className="text-black px-2" href="#!">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-black px-2" href="#!">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-black ps-2" href="#!">
                        <i className="fab fa-youtube"></i>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>When your pet is missing</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Recently found</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>How to adopt?</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Pets for adoption</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Material gifts</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Help with walks</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Volunteer activities</a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>General information</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>About the shelter</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Statistic data</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Job</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Tenders</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Contact</a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled">
                    <li>
                    <p><i className="fas fa-map-marker-alt pe-2"></i>Gotham city</p>
                    </li>
                    <li>
                    <p><i className="fas fa-phone pe-2"></i>+639 69-696-96</p>
                    </li>
                    <li>
                    <p><i className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="text-center p-3">
            © 2023
            <a className="text-black" href="https://mdbootstrap.com/"> SpecialDog.com</a>
            </div>
        </div>
        </div>

        </>
    );
};

export default Footer;
