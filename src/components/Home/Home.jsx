import React, { useEffect, useRef } from 'react';

function Home() {
    const getInRef = useRef(null);

    const scrollToGetIn = () => {
      window.location.href = '/about#getin';
      getInRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  useEffect(() => {
    var main = new Splide('#main-slider', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });

    var thumbnails = new Splide('#thumbnail-slider', {
      rewind: true,
      fixedWidth: 104,
      fixedHeight: 58,
      isNavigation: true,
      gap: 10,
      focus: 'center',
      pagination: false,
      cover: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }, []);

  return (
    <>
      <div className="container mt-2">
        <section>
          <div className="row mt-5">
            <div className="first col-6">
              <p className="digital">
                Digital Content For <span style={{ color: 'rgba(252,176,66,255)' }}>Dog Lover`s</span>
              </p>
              <p>
                As a dog lover, there is a wealth of digital content available that can cater to your interests. One
                option is to explore dog-related blogs and websites, where you can find informative articles on dog care,
                training tips, breed profiles, health advice, and inspiring stories about dogs.
              </p>
              <div className="py-5">
                <button className="btn btn-warning" onClick={scrollToGetIn}>
                  Get In Touch
                </button>
                <button id="expandButton" className="btn btn-outline-warning ms-4" onClick={scrollToGetIn}>
                  Read More
                </button>
              </div>
            </div>
            <div className="dogsPictureBox  align-items-center">
              <img id="dogsPicture" src="Images/dogWebsite.png" alt="Dogs" srcset="" />
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section>
          <div className="Interesting py-3">
            <p>
              Fascinating Facts <span style={{ color: 'rgba(252,176,66,255)' }}>About Dogs</span>
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/big.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Big" />
                </div>
              </div>
              <span className="trivia py-4">
                <label style={{ color: 'rgba(252,176,66,255)' }}>Biggest&nbsp;</label> Dogs
              </span>
              <p className="text-center">
                The English Mastiff, originating from England, is recognized as one of the largest dog breeds globally. It
                can weigh up to 200 pounds and stand at an impressive height.
              </p>
            </div>

            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/faster.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Fast" />
                </div>
              </div>
              <span className="trivia py-4">
                <span style={{ color: 'rgba(252,176,66,255)' }}>Fastest&nbsp;</span>Dogs
              </span>
              <p className="text-center">
                The Greyhound, with its sleek physique, is widely recognized as one of the fastest dog breeds globally. It
                can reach speeds of up to 45 miles per hour.
              </p>
            </div>
            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/many.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Sweet" />
                </div>
              </div>
              <span className="trivia py-4">
                <span style={{ color: 'rgba(252,176,66,255)' }}>Sweetest&nbsp;</span>Dogs
              </span>
              <p className="text-center">
                Bichon Frise: Bichon Frises are charming and affectionate companions. They love being the center of
                attention and are known for their cheerful and loving nature.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/moral.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Moral" />
                </div>
              </div>
              <span className="trivia py-4">
                <span style={{ color: 'rgba(252,176,66,255)' }}>Moral&nbsp;</span>Dogs
              </span>
              <p className="text-center">
                The Golden Retriever, known for its friendly and gentle nature, is often considered one of the most
                morally exceptional breeds, displaying loyalty and compassion.
              </p>
            </div>
            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/small.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Small" />
                </div>
              </div>
              <span className="trivia py-4">
                <span style={{ color: 'rgba(252,176,66,255)' }}>Smallest&nbsp;</span>Dogs
              </span>
              <p className="text-center">
                The Chihuahua, native to Mexico, is one of the smallest dog breeds worldwide, often weighing just a few
                pounds and standing a mere few inches tall.
              </p>
            </div>
            <div className="col-4">
              <div className="target">
                <div className="interestingIconsBox pt-5">
                  <img src="Images/DogIcons/strong.png" className="fas hvr-icon-buzz-out interestingIcons" alt="Strong" />
                </div>
              </div>
              <span className="trivia py-4">
                <span style={{ color: 'rgba(252,176,66,255)' }}>Strongest&nbsp;</span>Dogs
              </span>
              <p className="text-center">
                The American Pit Bull Terrier, known for its strength and determination, has impressive muscular power and
                endurance.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>
        <img src="/Images/school-divider.png" alt="" id="imagelogo" />
      </div>

      <div className="container">
        <div className="splide my-5" id="main-slider">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
                  className="img-fluid"
                  alt="Slide 1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </li>

              <li className="splide__slide">
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg"
                  className="img-fluid"
                  alt="Slide 2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </li>

              <li className="splide__slide">
                <img
                  src="https://tnt.abante.com.ph/wp-content/uploads/2021/07/AJ-Raval.jpg"
                  className="img-fluid"
                  alt="Slide 3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="splide my-5" id="thumbnail-slider">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide hvr-grow-shadow">
                <img
                  src="https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg"
                  className="img-fluid"
                  alt="Thumbnail 1"
                />
              </li>

              <li className="splide__slide hvr-grow-shadow">
                <img
                  src="https://media.tenor.com/dqH6ZBgOvMUAAAAj/dog-dance.gif"
                  className="img-fluid"
                  alt="Thumbnail 2"
                />
              </li>

              <li className="splide__slide hvr-grow-shadow">
                <img
                  src="https://media.tenor.com/ijffyjt8WKYAAAAj/dog-twerk.gif"
                  className="img-fluid"
                  alt="Thumbnail 3"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
