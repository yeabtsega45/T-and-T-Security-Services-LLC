import React from "react";
import { Image, Row } from "react-bootstrap";
import Faqs from "../FAQsPage/Faqs";
import SingleHowHelp from "./SingleHowHelp";

const ServiceDetailsRight = ({ service, image }) => {
// console.log("service", service.image)
  return (
    <div className="service-details__right">
      <div className="service-details__img">
{ image !== undefined   &&      <Image src={require(`@/images/sector/${service?.image}`).default.src} alt="Service Image" />}
        {/* { image !== undefined && <Image src={image} alt="" />} */}
      </div>
      <div className="service-details__content">
        <div className="service-details__title-box">
          <div className="service-details__title-icon">
            <span className={service?.icon}></span>
          </div>
          <h3 className="service-details__title">{service?.title}</h3>
        </div>
        <p className="service-details__text-1">{service?.description}</p>
        {/*<p className="service-details__text-2">{text2}</p>*/}
      </div>
      {/*<ul className="service-details__two-icons list-unstyled">*/}
      {/*  {contents.map((text, i) => (*/}
      {/*    <li key={i} className="service-details__two-icon-single">*/}
      {/*      <div className="service-details__two-icon">*/}
      {/*        <span className="icon-right-arrow"></span>*/}
      {/*      </div>*/}
      {/*      <p className="service-details__two-icon-content">{text}</p>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<p className="service-details__text-3">{text3}</p>*/}
      {/*<div className="service-details__how-help">*/}
      {/*  <Row>*/}
      {/*    {howHelps.map((howHelp) => (*/}
      {/*      <SingleHowHelp key={howHelp.id} howHelp={howHelp} />*/}
      {/*    ))}*/}
      {/*  </Row>*/}
      {/*</div>*/}
      {/*<div className="service-details__faq">*/}
      {/*  <Faqs faqs={faqs} />*/}
      {/*</div>*/}
    </div>
  );
};

export default ServiceDetailsRight;
