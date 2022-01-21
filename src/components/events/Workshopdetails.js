import React from "react";
import { useParams } from "react-router-dom";

import workshops from "./workshops";

import "./Eventdetails.css";

const Workshopdetails = () => {
  const { id } = useParams();
  const workshop = workshops[workshops.length - id];
  const points = workshop.about.split(". ");

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row workshops"
      >
        <div id="Worshops" className="span_headings">
          <span>Workshop Details</span>
          <span role="img" aria-label=""></span>
        </div>
      </div>
      <div className="events-container">
        <div className="events-card">
          <div
            className="events-header"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              src={workshop.imageSrc}
              alt="Workshops_Image"
              className="events-image"
            />
          </div>
          <div className="events-main">
            <div
              className="events-body"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-anchor=".example-selector"
              data-aos-anchor-placement="top-center"
            >
              <span>
                <b> {workshop.name}</b>
              </span>
              <span>
                <b>Date :</b> {workshop.date}
              </span>
              <span>
                <b>Day :</b> {workshop.day}
              </span>
              <span>
                <b>Speaker :</b> {workshop.speaker}
              </span>
              <div>
                <b>Description :</b>{" "}
                {points.map((point) => (
                  <li>{point}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshopdetails;
