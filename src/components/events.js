import { fetchEventApi } from "../api/event";
import { useQuery } from "react-query";
import { formatDateToString } from "../utils/formatDate";
import moment from "moment";
import BookEvent from "./bookEvent";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const eventsQuery = useQuery(["fetchEventApi"], fetchEventApi);
  const events = eventsQuery?.data?.data?.data;
  const [eventToUse, setEventToUse] = useState(null);
  const [SignedInUser] = useLocalStorage("SignedInUser");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="row">
        {events?.map((doc) => (
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
                <div className="meta mb-3">
                  <div>{formatDateToString(doc.dateAndTime)}</div>
                </div>
                <h3 className="heading mb-4">{doc.title}</h3>
                <p className="time-loc">
                  <span className="mr-2">
                    <i className="icon-clock-o"></i>{" "}
                    {`${moment(doc.dateAndTime).format("h:mmA")} - ${moment(
                      doc.dateAndTime
                    )
                      .add(Number(doc.duration), "hours")
                      .format("h:mmA")}`}
                  </span>{" "}
                  <span>
                    <i className="icon-map-o"></i> {doc.venue}
                  </span>
                </p>
                <p>{doc.description}</p>
                <p
                  style={{ cursor: "pointer", color: "#f86f2d" }}
                  onClick={() => {
                    setEventToUse(doc);
                    onOpen();
                  }}
                >
                  Register for Event <i className="ion-ios-arrow-forward"></i>
                </p>
                {Boolean(SignedInUser) && (
                  <p
                    style={{ cursor: "pointer", color: "#f86f2d" }}
                    onClick={() => navigate(`/admin-event/${doc._id}`)}
                  >
                    View Attendees <i className="ion-ios-arrow-forward"></i>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookEvent
        event={eventToUse}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Events;
