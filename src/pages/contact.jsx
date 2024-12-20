import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <div
        className="hero-wrap"
        style={{ backgroundImage: "url('images/bg_7.jpg')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-9 ftco-animate text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                THE LEADERSHIP QUESTION: PROSPECTS FOR NIGERIA
              </h1>
              {/* <p
              className="mb-5"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >
              Created by <a href="#">Colorlib.com</a>
            </p>  */}

              {/* <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              <a
                href="https://vimeo.com/45830194"
                className="btn btn-white btn-outline-white px-4 py-3 popup-vimeo"
                ><span className="icon-play mr-2"></span>Watch Video</a
              >
            </p>  */}
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-counter ftco-intro" id="section-counter">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 color-1 align-items-stretch">
                <div className="text text-center">
                  <h3 className="mb-4">ANNUAL LEADERSHIP LECTURE</h3>
                  <p>
                    The lecture highlights leadership values of integrity,
                    honesty, and accountability, exemplified by Chief Akande,
                    and will be delivered by a distinguished Nigerian embodying
                    these ideals.
                  </p>
                  {/* <p>
                  <a href="#" className="btn btn-white px-3 py-2 mt-2"
                    >Donate Now</a
                  >
                </p> */}
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 color-2 align-items-stretch">
                <div className="text text-center">
                  <h3 className="mb-4">ANNUAL ROUND-TABLE ON FOOD SECURITY</h3>
                  <p>
                    The AAF will address food security challenges by organizing
                    a round table with expert stakeholders to develop policy
                    briefs for government action.
                  </p>
                  {/* <p>
                  <a href="#" className="btn btn-white px-3 py-2 mt-2"
                    >Donate Now</a
                  >
                </p> */}
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 color-3 align-items-stretch">
                <div className="text text-center">
                  <h3 className="mb-4">EMERGING LEADERS FELLOWSHIP</h3>
                  <p>
                    The AAF's Emerging Leaders Fellowship is a non-partisan
                    program training young Nigerians (21–35) in transparency,
                    efficiency, and accountability to prepare them for future
                    leadership roles.
                  </p>
                  {/* <p>
                  <a href="#" className="btn btn-white px-3 py-2 mt-2"
                    >Be A Volunteer</a
                  >
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-9 heading-section ftco-animate text-center">
              <h2 className="mb-4">Why the Foundation</h2>
              <p>
                Nigeria is made up of a diverse but relatively young population.
                It is estimated that 60 per cent of Nigeria's population is
                under the age of 25, making it one of the youngest countries in
                Africa. While this should ordinarily be an advantage, however,
                the youth population in Nigeria is faced with many challenges.
                For example, as of 2020, around 68 per cent of the young people
                in Nigeria had secondary education as their highest educational
                level. This also has implications for the youth unemployment
                rate, which has been increasing steadily since 2015, and as of
                2021, stood at 19.6% (ILO, 2023). An earlier report by the
                National Bureau of Statistics (NBS) indicated that about 53% of
                151 million Nigerian youths, numbering over 80 million, are
                unemployed, making Nigeria the second-highest number of
                unemployed youths in the world (Foundation for Investigative
                Journalism, 2023). Several factors ranging from a large
                population, lack of jobs, and deficient school curricula, among
                others, have been given for the high unemployment figures
                (Akande, 2014). The consequences of rising crime in the country
                cannot be overemphasized (Ayinla and Ogunmeru, 2018), with 70%
                of Nigeria's Youth said to be involved in crime as a result of
                poverty and lack of economic opportunities. According to
                Dambazau (2007) and Adebayo ( 2013), the nature of these crimes
                includes armed robbery, murder, rape, car theft, burglary,
                fraud, bribery and corruption, food and drug adulteration,
                gambling, smuggling, human trafficking, kidnapping, drug
                trafficking, money laundering, internet scam, advanced fee fraud
                and other illegal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" style={{ padding: "0 0 2em 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3">
                  <span className="flaticon-donation-1"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading">Online Application</h3>
                  <p>
                    Applicants will submit their CVs, two essays detailing their
                    leadership experiences and future goals, and one letter of
                    recommendation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3">
                  <span className="flaticon-charity"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading">Virtual Interview</h3>
                  <p>
                    Applicants will submit their CVs, two essays detailing their
                    leadership experiences and future goals, and one letter of
                    recommendation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 d-flex services p-3 py-4 d-block">
                <div className="icon d-flex mb-3">
                  <span className="flaticon-donation"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading">Final Selection</h3>
                  <p>
                    Applicants will submit their CVs, two essays detailing their
                    leadership experiences and future goals, and one letter of
                    recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-6 heading-section ftco-animate text-center">
              <h2
                style={{ color: "#fd7e14", fontWeight: "900" }}
                className="mb-4"
              >
                “If you walk alone, you don’t go far. If you walk with others,
                you travel further.”
              </h2>
              <h2>– Aigboje and Ofovwe Aig-Imoukhuede</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Recent News</h2>
              <p>Key Developments and Updates You Need to Know</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="carousel-cause owl-carousel">
                <div className="item">
                  <div className="cause-entry">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url('images/bew-1.jpg')" }}
                    ></a>
                    <div
                      className="text p-3 p-md-4"
                      style={{ height: "400px" }}
                    >
                      <h3 className="text-3">
                        Former Osun gov, Akande, calls for NASS to replace 1999
                        Constitution with 1960 version
                      </h3>
                      <p className="text-5">
                        Veteran politician and former governor of Osun State,
                        Chief Bisi Akande, has ignited a fresh round of debate
                        about constitutional reform and restructuring with a
                        provocative suggestion.
                      </p>
                      <span className="donation-time mb-3 d-block">
                        January 14, 2024
                      </span>
                      <span
                        className="fund-raised d-block text-right"
                        style={{ color: "#fd7e14" }}
                      >
                        <p>
                          <a
                            target="_blank"
                            href="https://www.ripplesnigeria.com/former-osun-gov-akande-calls-for-nass-to-replace-1999-constitution-with-1960-version/"
                          >
                            Read More
                          </a>
                          <i className="ion-ios-arrow-forward"></i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cause-entry">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url('images/new-2.jpg')" }}
                    ></a>
                    <div
                      className="text p-3 p-md-4"
                      style={{ height: "400px" }}
                    >
                      <h3 className="text-3">
                        Buhari’s handlers think he’s still a soldier —Ex-Osun
                        gov, Akande
                      </h3>
                      <p className="text-5">
                        The former Governor of Osun State and interim National
                        Chairman of All Progressives Congress (APC), Chief Bisi
                        Akande has lamented that the handlers of President
                        Muhammadu Buhari think he is still a soldier.
                      </p>
                      <span className="donation-time mb-3 d-block">
                        December 9, 2021
                      </span>
                      <span
                        className="fund-raised d-block text-right"
                        style={{ color: "#fd7e14" }}
                      >
                        <p>
                          <a
                            target="_blank"
                            href="https://www.ripplesnigeria.com/buharis-handlers-think-hes-still-a-soldier-ex-osun-gov-akande/"
                          >
                            Read More
                          </a>
                          <i className="ion-ios-arrow-forward"></i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cause-entry">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url('images/new-3.jpg')" }}
                    ></a>
                    <div
                      className="text p-3 p-md-4"
                      style={{ height: "400px" }}
                    >
                      <h3 className="text-3">
                        My allowances as UI pro-chancellor will go to
                        scholarship fund — Bisi Akande
                      </h3>
                      <p className="text-5">
                        Bisi Akande, the Pro-Chancellor and Chairman of the
                        Governing Council at the University of Ibadan (UI), has
                        pledged to donate his allowances to support science
                        scholarships for deserving students.
                      </p>
                      <span className="donation-time mb-3 d-block">
                        August 31, 2024
                      </span>
                      <span
                        className="fund-raised d-block text-right"
                        style={{ color: "#fd7e14" }}
                      >
                        <p>
                          <a
                            target="_blank"
                            href="https://tribuneonlineng.com/my-allowances-as-ui-pro-chancellor-will-go-to-scholarship-fund-bisi-akande/#google_vignette"
                          >
                            Read More
                          </a>
                          <i className="ion-ios-arrow-forward"></i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cause-entry">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url('images/new-4.jpg')" }}
                    ></a>
                    <div
                      className="text p-3 p-md-4"
                      style={{ height: "400px" }}
                    >
                      <h3 className="text-3">
                        SANWO-OLU COMMISERATES WITH BISI AKANDE OVER DEATH OF
                        SON-IN-LAW
                      </h3>
                      <p className="text-5">
                        Lagos State Governor and Chairman of the South West
                        Governors Forum, Mr. Babajide Sanwo-Olu, on Friday,
                        condoled with the newly appointed Chairman of the
                        Governing Council of the University of Ibadan and former
                        interim National Chairman of the All Progressives
                        Congress (APC), Chief Bisi Akande, over the death of his
                        son-in-law, Barr. Oyedele Clement Akintola.
                      </p>
                      <span className="donation-time mb-3 d-block">
                        July 5, 2024
                      </span>
                      <span
                        className="fund-raised d-block text-right"
                        style={{ color: "#fd7e14" }}
                      >
                        <p>
                          <a
                            target="_blank"
                            href="https://lagosstate.gov.ng/sanwo-olu-commiserates-with-bisi-akande-over-death-of-son-in-law/"
                          >
                            Read More
                          </a>
                          <i className="ion-ios-arrow-forward"></i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cause-entry">
                    <a
                      href="#"
                      className="img"
                      style={{ backgroundImage: "url('images/new-5.jpg')" }}
                    ></a>
                    <div
                      className="text p-3 p-md-4"
                      style={{ height: "400px" }}
                    >
                      <h3 className="text-3">
                        Bisi Akande, Olanipekun, Top List As Tinubu
                        Reconstitutes Governing Boards Of Tertiary Institutions
                      </h3>
                      <p className="text-5">
                        President Bola Tinubu has approved the reconstitution of
                        Governing Councils and Boards of federal universities,
                        polytechnics and colleges of education.
                      </p>
                      <span className="donation-time mb-3 d-block">
                        July 5, 2024
                      </span>
                      <span
                        className="fund-raised d-block text-right"
                        style={{ color: "#fd7e14" }}
                      >
                        <p>
                          <a
                            target="_blank"
                            href="https://lagosstate.gov.ng/sanwo-olu-commiserates-with-bisi-akande-over-death-of-son-in-law/"
                          >
                            Read More
                          </a>
                          <i className="ion-ios-arrow-forward"></i>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our Latest Podcast</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/podcast-1.jpg')" }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mb-4">
                    <a href="#">World Wide Podcast</a>
                  </h3>
                  <p className="time-loc">
                    <span className="mr-2">
                      <i className="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>
                    <span>
                      <i className="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Listen <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/podcast-2.jpg')" }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mb-4">
                    <a href="#">World Wide Podcast</a>
                  </h3>
                  <p className="time-loc">
                    <span className="mr-2">
                      <i className="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>
                    <span>
                      <i className="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Listen <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/podcast-3.jpg')" }}
                ></a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mb-4">
                    <a href="#">World Wide Podcast</a>
                  </h3>
                  <p className="time-loc">
                    <span className="mr-2">
                      <i className="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>
                    <span>
                      <i className="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Listen <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section-3 img"
        style={{ backgroundImage: "url('images/signup.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-md-6 d-flex ftco-animate">
              <div
                className="img img-2 align-self-stretch"
                style={{ backgroundImage: "url('images/signup2.jpg')" }}
              ></div>
            </div>
            <div className="col-md-6 volunteer pl-md-5 ftco-animate">
              <h3 className="mb-3">Sign up to receive news & updates</h3>
              <form action="#" className="volunter-form">
                <div className="form-group">
                  <input
                    type="texts"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  {/* <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  className="form-control"
                  placeholder="Message"
                ></textarea>  */}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-white py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
