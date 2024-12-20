import { useDisclosure } from "@chakra-ui/react";
import AddEvent from "../components/addEvent";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
import AddLeadership from "../components/addLeadership";

const Admin = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: leadershipisOpen,
    onOpen: leadershiponOpen,
    onClose: leadershiponClose,
  } = useDisclosure();

  const adminActs = [
    {
      heading: "Foundation Events",
      body: "You can add new record for future events",
      btnText: "View",
      onClick: () => onOpen(),
    },
    {
      heading: "Leadership Programs",
      body: "You can create a new and manage leadership program",
      btnText: "View",
      onClick: () => leadershiponOpen(),
    },
  ];
  return (
    <Layout>
      <div
        className="hero-wrap"
        style={{ backgroundImage: "url('images/event-6.jpg')" }}
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
                Admin Activities
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-5 heading-section ftco-animate text-center">
              <h2 className="mb-4">Admin Section</h2>
            </div>
          </div>
          <div className="row">
            {adminActs.map((doc) => (
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <div
                    style={{ marginTop: "0px !important" }}
                    className="text p-4 d-block"
                  >
                    <h3 className="heading mb-4">
                      <a href="#">{doc.heading}</a>
                    </h3>
                    <p>{doc.body}</p>
                    <button
                      onClick={doc.onClick}
                      type="submit"
                      className="btn btn-white py-3 px-5"
                    >
                      {doc.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AddEvent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <AddLeadership
        isOpen={leadershipisOpen}
        onOpen={leadershiponOpen}
        onClose={leadershiponClose}
      />
    </Layout>
  );
};

export default Admin;
