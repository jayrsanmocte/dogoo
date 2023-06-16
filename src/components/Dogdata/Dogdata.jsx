import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dogdata() {
  const [breedImages, setBreedImages] = useState([]);
  const [breedData, setBreedData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [spanName, setspanName] = useState([]);

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let breedname = urlParams.get('breedname');
    let breedid = urlParams.get('breedid');
    if (breedname ==  'McDarn'){

      // let DataNiMc = {
      //   name: breedname,
      //   description : '',
      //   life: { min: '12 Million', max: '32 Million' },
      //   male_weight: { min: '1 Million', max: '10 Million' },
      //   female_weight: { min: '1 Million', max:'10 Million' },
      // }

      // console.log(DataNiMc);

      setBreedImages(
        [
          'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/292459514_2285239954972944_6766144931185054938_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFh-rYbd1omK8MAvQOexMmWlZHBoEqv11eVkcGgSq_XVxMa32K8NKk3xNKNHldJaZNx2_GgYapNQC8wlaV03qZX&_nc_ohc=gCUrdzt0KTEAX9k34RP&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfAp8UXDgPhCKO3R41Ezy9ggI8fEVQPA9k4hJQWpWZExXw&oe=6492488E',
          'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/258143632_2106043552892586_5476983103998687937_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEWHiVM9hPaA4vY8V-OQOu5bGxz_MgZQftsbHP8yBlB--HmFSgiHc2GMNhW6Xkz2Dqa2wAie1byG36Omr7_R8Wr&_nc_ohc=AICKa4QVdlcAX_l9sxo&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfBUUhr3UCXDpN2Lq42zVEaDivwxlhH5raZC_LjssX7GGA&oe=6491D47F',
          'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/271990786_2151314928365448_4960096873252136557_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEm1Ep1DcLweJidPzwPE9m83Id6gUD6yRTch3qBQPrJFCHaqnKwsYyzIOYe_D27l0jd7SpiJTMIZBy_jcPq0jZ7&_nc_ohc=6qXScGPWL0oAX-tQh2p&_nc_oc=AQmkN7d5W_b82pqMlKsxTMJiSL67fuYM6rVm-HgoVuIVy0U4HHzh4Qq2_q-8FbOqkEA&_nc_ht=scontent.fmnl30-3.fna&oh=00_AfC0CenYDkPoRBs-uFhsPyRVe4CuAAnO3ZgC5ZrcUUFMUg&oe=649168A6',
          'https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/83377913_1503654719798142_1044233087984074752_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFyGZgy_HOuy0Ppv4lBfRe6j6wZtQiXq7uPrBm1CJeru2OV-70ehgqiqNu8wE0D0Ah6TgYSQSPsMEtp2JyfPnqz&_nc_ohc=mhh7s2E-caEAX9t4_xC&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfDena9kfd_OdofJR4vBEz24s8wuVzIVPM1Klh-iiwvw7Q&oe=64B40153',
        ]
      )

      setBreedData({
        name: breedname,
        description : '',
        life: { min: '12 Million', max: '32 Million' },
        male_weight: { min: '1 Million', max: '10 Million' },
        female_weight: { min: '1 Million', max:'10 Million' },
      });



      setspanName(divideString(breedname))
      // setIsLoading(false);

    }
    else {

      dogfetchdata(breedname, breedid);
    }




  }, []);

  function divideString(str) {
    const middleIndex = Math.floor(str.length / 2); // Calculate the middle index of the string
    const firstHalf = str.slice(0, middleIndex); // Extract the first half of the string
    const secondHalf = str.slice(middleIndex); // Extract the second half of the string
  
    return [firstHalf, secondHalf]; // Return an array with the divided parts
  }

  // console.log(breedData);


  function dogfetchdata(breedname, breedid) {
    axios
      .get(`https://dog.ceo/api/breed/${breedname}/images`)
      .then((response) => {
        setBreedImages(response.data.message)
        // console.log(response.data.message);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://dogapi.dog/api/v2/breeds/${breedid}`)
      .then((response) => {
        const breed = response.data.data;
        if (breed) {
          const {
            name,
            description,
            life: { min: minLife, max: maxLife },
            male_weight: { min: minMaleWeight, max: maxMaleWeight },
            female_weight: { min: minFemaleWeight, max: maxFemaleWeight },
          } = breed.attributes;

          console.log(breed.attributes);

          setBreedData({
            name,
            description,
            life: `${minLife} - ${maxLife}`,
            maleWeight: `${minMaleWeight} - ${maxMaleWeight}`,
            femaleWeight: `${minFemaleWeight} - ${maxFemaleWeight}`,
          });
          // console.log(response.data.data)
          setspanName(divideString(response.data.data.attributes.name))
        } else {
          console.log('Breed data not found');
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  return ( 
    
    // <div style={{ overflow: 'hidden' }}>
      <div className="background-container">
        {isLoading ? (
          <div className="spinner-grow text-primary" role="status">
            <p></p>
          </div>
        ) : (
          <div className="container doggy-container" id="dogowarper">
            <div className="row">
              <div className="col-md-6">
              {/* <h3 className='dogo'>{breedData.name}</h3> */}
              <h3 className='dogo'><span className='spanName1'>{spanName[0]}</span><span className='spanName2'>{spanName[1]}</span></h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
                  <div className="carousel-indicators">
                    {breedImages.slice(0, 5).map((_, index) => (
                      <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to={index}
                        className={index === currentImageIndex ? 'active' : ''}
                        aria-label={`Slide ${index + 1}`}
                        key={index}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {breedImages.map((image, index) => (
                      <div
                        className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
                        key={index}
                      >
                        <div className="carouselBox">
                          <img src={image} className="carousel-image" alt={breedData.name} />
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="amen">
                <div className="row thumbnail-gallery">
                  {breedImages.slice(0, 12).map((image, index) => (
                    <div className="col-4 mb-2" key={index}>
                      <img
                        src={image}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        alt={breedData.name}
                        onClick={() => setCurrentImageIndex(index)}
                        style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
               
                <div className="pBox">
                  <div className="ppBox">
                    <p>Description: {breedData.description}</p>
                    <p className="pdog">Life: {breedData.life}</p>
                    <p className="pdog">Male Weight: {breedData.maleWeight}</p>
                    <p className="pdog">Female Weight: {breedData.femaleWeight}</p>
                  </div>
                </div>
                <Link to="/searchDog">
                  <div className="inamoTalaga">
                    <div className="inamoBox mt-5">
                      <button className="btn btn-warning inamo">Go Back</button>
                    </div>
                  </div>
                </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    // </div>
  );
}

export default Dogdata;
