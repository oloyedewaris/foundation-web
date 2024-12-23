import { fetchLeadershipApi } from "../api/leadership";
import { useQuery } from "react-query";
import { changeDateFormat, formatDateToString } from "../utils/formatDate";
import moment from "moment";
import BookLeadership from "./bookLeadership";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Leaderships = () => {
  const navigate = useNavigate();
  const leadershipsQuery = useQuery(["fetchLeadershipApi"], fetchLeadershipApi);
  const leaderships = leadershipsQuery?.data?.data?.data;
  const [eventToUse, setLeadershipToUse] = useState(null);
  const [SignedInUser] = useLocalStorage("SignedInUser");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="row">
        {leaderships?.map((doc) => (
          <div className="col-md-4 d-flex ftco-animate">
            <div
              className="blog-entry align-self-stretch"
              style={{ width: "100%" }}
            >
              <div
                className="block-20"
                style={{ backgroundImage: `url(${doc.image})` }}
              ></div>
              <div className="text p-4 d-block">
                <h3 className="heading mb-4">{doc.title}</h3>
                <p className="time-loc">
                  <span className="mr-2">
                    <i className="icon-clock-o"></i>{" "}
                    {`${changeDateFormat(doc.startDate)} - ${changeDateFormat(
                      doc.endDate
                    )}`}
                  </span>{" "}
                </p>
                <p>{doc.description}</p>
                <p
                  style={{ cursor: "pointer", color: "#f86f2d" }}
                  onClick={() => {
                    setLeadershipToUse(doc);
                    onOpen();
                  }}
                >
                  Apply for Leadership program{" "}
                  <i className="ion-ios-arrow-forward"></i>
                </p>
                {Boolean(SignedInUser) && (
                  <p
                    style={{ cursor: "pointer", color: "#f86f2d" }}
                    onClick={() => navigate(`/admin-leadership/${doc._id}`)}
                  >
                    View Applicants <i className="ion-ios-arrow-forward"></i>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookLeadership
        leadership={eventToUse}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Leaderships;
