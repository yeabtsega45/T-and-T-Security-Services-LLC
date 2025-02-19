import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";


const ServiceDetails = ({ service }) => {
//  console.log("serviceDetails", service)
  return (
    <section className="service-details">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <ServiceDetailsSidebar service={service}/>
          </Col>
          <Col xl={8} lg={7}>
            <ServiceDetailsRight service={service[0]} image={service.length > 0 ? service[0]?.image : "sector_1.jpg"}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
