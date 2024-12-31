import Layout from "../components/layout";

const About = () => {
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
                <span>About</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div
              className="col-md-6 heading-section ftco-animate text-left"
              style={{ textAlign: "left !important" }}
            >
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
              <h2 className="mt-4 mb-2 text-center">Vision Statement</h2>
              <p>
                To create a generation of empowered youth and women who
                exemplify integrity, productivity, and leadership, driving
                sustainable development and fostering a brighter future for
                Nigeria.
              </p>
              <h2 className="mt-4 mb-2 text-center">Mission Statement</h2>
              <p>
                To inspire and empower youth and women through education,
                leadership development, and entrepreneurial programs that
                promote the values of Transparency, Efficiency, and
                Accountability (TEA), while addressing critical challenges and
                creating lasting opportunities for national growth and community
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
