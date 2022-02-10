import React from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../footer/ScrollToTop";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <NavLink onClick={scrollToTop} to={`/events/${props.event.id}/`}>
          <img
            src={props.event.imageSrc}
            className="img-fluid event-img"
            alt="Event_Image"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
