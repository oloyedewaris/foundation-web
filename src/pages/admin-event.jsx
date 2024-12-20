import Layout from "../components/layout";
import { useQuery } from "react-query";
import { fetchEventBookingByEventApi } from "../api/eventBooking";
import { useParams } from "react-router-dom";
import { fetchEventByIdApi } from "../api/event";

const AdminEvent = () => {
  const { id } = useParams();
  const eventQuery = useQuery(["fetchEventByIdApi"], () =>
    fetchEventByIdApi(id)
  );
  const event = eventQuery?.data?.data?.data;
  const bookersQuery = useQuery(["fetchEventBookingByEventApi", id], () =>
    fetchEventBookingByEventApi(id)
  );
  const bookers = bookersQuery?.data?.data?.data;

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
                <span>Admin</span>
              </p>
              <h1
                className="mb-3 bread"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Event Attendees
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">{event?.title}</h2>
            </div>
          </div>
          <div className="row">
            {bookers?.map((doc) => (
              <div className="col-md-4 d-flex ftco-animate">
                <div
                  className="blog-entry align-self-stretch"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{ marginTop: "0px !important" }}
                    className="text p-4 d-block"
                  >
                    <h3 className="heading mb-4">
                      <a href="#">
                        {doc.first_name} {doc.last_name}
                      </a>
                    </h3>
                    <p>{doc.phone_number}</p>
                    <p>{doc.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminEvent;
