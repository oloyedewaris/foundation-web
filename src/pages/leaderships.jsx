import Layout from "../components/layout.js";
import ApplicationForm from "../components/applicationForm.js";

const LeadershipsComp = () => {
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
                <span>Leaderships</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                ENTREPRENEURIAL EMPOWERMENT PROGRAM
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-8 heading-section ftco-animate text-left">
              <h2 className="mb-4 text-center">
                Adebisi Akande Entrepreneurship Program
              </h2>
              <p>
                Are you a young entrepreneur, farmer, small-scale business
                owner, or aspiring business leader in Ila-Orangun, Osun State?
                This is your opportunity to gain the skills, mentorship, and
                funding needed to transform your business dreams into reality!
              </p>
              <p>
                The
                <strong style={{ color: "#141414" }}>
                  {" "}
                  Adebisi Akande Entrepreneurship Program{" "}
                </strong>
                is a one-week onsite training initiative designed to empower
                indigenes of Ila-Orangun with critical business skills.
                Participants will learn from expert mentors, develop business
                proposals, and compete for grants of up to ₦300,000 to kickstart
                or expand their ventures.
              </p>

              <h4 className="heading mb-3 mt-4">Program Highlights:</h4>
              <ul style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#141414" }}>
                    Hands-On Training:{" "}
                  </strong>
                  Gain practical knowledge in business planning, financial
                  management, and marketing.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#141414" }}>
                    Proposal Development:{" "}
                  </strong>
                  Craft a winning business proposal under expert guidance.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "#141414" }}>Grant Awards: </strong>
                  Stand a chance to receive part of the ₦5 million grant fund to
                  launch or grow your business.
                </li>
              </ul>

              <h2 className="mb-3 mt-4 text-center">Call for Applications</h2>
              <p>
                Are you an indigene of Ila-Orangun, Osun State, with a passion
                for growing your business? This is your opportunity to gain
                critical business skills, expert mentorship, and funding to take
                your venture to the next level!
              </p>
              <p>
                The Adebisi Akande Entrepreneurship Program is designed to
                empower local entrepreneurs in Ila-Orangun. Participants will
                receive hands-on training, develop business proposals, and
                compete for grants of up to ₦300,000 to scale their businesses.
              </p>

              <h4 className="heading mb-3 mt-4">Eligibility Criteria:</h4>
              <ul style={{ paddingLeft: "40px" }}>
                <li style={{ marginBottom: "10px" }}>
                  Must be an indigene of Ila-Orangun, Osun State.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Must have an existing business and provide evidence of its
                  operation.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Must demonstrate a strong interest in growing the business.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Must present a business proposal and commit to attending the
                  full business development training.
                </li>
              </ul>

              <h4 className="heading mb-3 mt-4">Application Timeline:</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <strong style={{ color: "#141414" }}>Start Date: </strong>
                  December 30, 2024
                </li>
                <li>
                  <strong style={{ color: "#141414" }}>Deadline: </strong>
                  January 5, 2025
                </li>
              </ul>

              <p className="mt-4">
                This first edition is dedicated to empowering the people of
                Ila-Orangun and to foste sustainable business development in
                Chief Adebisi Akande’s hometown.
              </p>
              <p>
                <strong style={{ color: "#141414" }}>Apply Now!</strong>
                <br />
                Don’t miss this chance to transform your business and contribute
                to the growth of Ila-Orangun. To apply, click
                <a style={{ color: "#f86f2d" }} href="#apply">
                  {" "}
                  here
                </a>
              </p>
              <p>
                For more information,
                <a
                  style={{ color: "#f86f2d" }}
                  href="mailto:team@adebisiakandefoundation.com"
                >
                  {" "}
                  contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ApplicationForm />
    </Layout>
  );
};

export default LeadershipsComp;
