import Layout from "../components/layout";
import { newsData } from "../utils/units";

const News = () => {
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
                <span>News</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Latest News
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Our Latest News</h2>
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

export default News;
