import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const ServiceCard = (props) => {
  const { children, title, onClick } = props;
  return (
    <>
      <div className="col-md-3 m-4 jusitify-content-center">
        <div
          class="card card_body card_service"
          onClick={onClick}
          style={{ width: "17rem" }}
        >
          <div class="card-body service_card">
            {children}
            <h5 class="service_card_title">{title}</h5>
            <p>
              <a href="#services" class="service_card-link">
                View more <IoIosArrowRoundForward />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
