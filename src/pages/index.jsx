import Layout from "../components/layout";
import { newsData, eventsData } from "../utils/data";
// import Events from "../components/events";

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

      {/* <section className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-6 heading-section ftco-animate text-left">
              <h2 className="mb-4 text-center">Why the Foundation</h2>
              <p>
                The Adebisi Akande Foundation was established to address the
                critical challenges facing Nigeria’s youth and women,
                recognizing their untapped potential as the driving force for
                national development. With over half of Nigeria’s population
                under the age of 25, the country’s youthful demographic
                represents both an opportunity and a challenge. Rising
                unemployment, inadequate educational curricula, and limited
                economic opportunities have left millions of young Nigerians
                without the tools they need to thrive. Women, particularly, face
                compounded barriers to productivity and empowerment.
              </p>
              <p>
                In response, the Adebisi Akande Foundation is committed to
                reversing these trends by fostering leadership, productivity,
                and empowerment. Inspired by the values of Transparency,
                Efficiency, and Accountability (TEA), which are hallmarks of
                Chief Bisi Akande’s leadership legacy, the foundation also seeks
                to address Nigeria’s growing leadership challenges. By promoting
                these core values, the foundation aims to cultivate a generation
                of leaders who exemplify integrity and patriotism, capable of
                guiding the nation towards sustainable development.
              </p>
              <p>
                Through its flagship programs—including leadership lectures,
                entrepreneurship training, and youth mentorship—the foundation
                bridges the gap between potential and opportunity. It not only
                addresses unemployment and poverty but also showcases the TEA
                legacy of Chief Akande, instilling a culture of excellence and
                responsibility in the next generation of Nigerian leaders.
              </p>
              <p>
                The Adebisi Akande Foundation stands as a beacon of hope,
                nurturing responsible citizens and leaders committed to building
                a brighter, more equitable future for all.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ftco-section" style={{ padding: "2em 0 2em 0" }}>
        <div className="container">
          <h1 className="mt-4 mb-4 text-center">
            APLICATION PROCESS FOR THE EMERGING LEADERS FELLOWSHIP
          </h1>
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
                    Shortlisted candidates will participate in a virtual
                    interview conducted by the selection panel. The interview
                    will assess their leadership potential, communication
                    skills, and alignment with the fellowship's mission.
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
                    The selection panel will carefully evaluate all applicants
                    based on their application materials and interview
                    performance. Finalists will be chosen for the fellowship
                    based on their demonstrated leadership capacity, innovative
                    ideas, and commitment to personal and community development.
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
              {/* <p>Key Developments and Updates You Need to Know</p> */}
            </div>
          </div>
          <div className="row">
            {eventsData?.map((doc) => (
              <div className="col-md-4 d-flex ftco-animate">
                <div
                  className="blog-entry align-self-stretch"
                  style={{ width: "100%" }}
                >
                  <div
                    className="block-20"
                    style={{ backgroundImage: doc.image }}
                  ></div>
                  <div className="text p-4 d-block">
                    <div className="meta mb-3">
                      {/* <div>{formatDateToString(doc.dateAndTime)}</div> */}
                    </div>
                    <h3 className="heading mb-4">{doc.title}</h3>
                    <p className="time-loc">
                      <span className="mr-2">
                        <i className="icon-clock-o"></i> {doc.date}
                      </span>
                      <span>
                        <i className="icon-map-o"></i> {doc.venue}
                      </span>
                    </p>
                    <p>{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <Events /> */}
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
