import Layout from "../components/layout";
// import Events from "../components/events";
import { eventsData } from "../utils/data";

const EventsComp = () => {
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
              className="col-md-7 ftco-animate text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <p
                className="breadcrumbs"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>
                <span>Events</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Recent Events
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our Recent Events</h2>
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
    </Layout>
  );
};

export default EventsComp;
