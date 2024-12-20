import Layout from "../components/layout";
import { newsData } from "../utils/units";
import Events from "../components/events";

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

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Latest News</h2>
              <p>Key Developments and Updates You Need to Know</p>
            </div>
          </div>
          <div className="row d-flex">
            {newsData.map((doc) => (
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <div
                    className="block-20"
                    style={{ backgroundImage: `${doc.image}` }}
                  />
                  <div className="text p-4 d-block">
                    <div className="meta mb-3">
                      <div>
                        <p>{doc.date}</p>
                      </div>
                    </div>
                    <h3 className="heading mt-3">
                      <a href={`/news/${doc.id}`}>{doc.heading}</a>
                    </h3>
                    <p>{doc.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Recent Events</h2>
              <p>Key Developments and Updates You Need to Know</p>
            </div>
          </div>
          <Events />
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
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
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
