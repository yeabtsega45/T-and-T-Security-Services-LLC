import { workTogether } from "@/data/workTogether";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const {
  shape,
  image1,
  image2,
  tagline,
  title,
  text,
  points,
  parsonImage,
  personName,
} = workTogether;

const WorkTogether = ({ id = "" }) => {
  const ref = useActive(id);
  return (
    <section ref={ref} className="work-together" id={id}>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="work-together__left animated slideInLeft">
              <div className="work-together__img-box">
                <div className="work-together-shape-1">
                  <Image src={shape.src} alt="" />
                </div>
                <div className="work-together__img-1">
                <Image src={require(`@/images/about/about_us_lg.png`).default.src} alt="" />
                  <div className="work-together__img-2">
                  <Image src={require(`@/images/about/about_us_sm.png`).default.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="work-together__right">
              <Title title={"Why Choose T & T Security Services LLC?"} tagline={""} className="text-left" />
              {/*<p className="work-together__right-text">{text}</p>*/}
              <ul className="list-unstyled work-together__points">
                {points.map((point, i) => (
                  <li key={i}>
                    <div className="icon">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/*<div className="work-together__person">*/}
              {/*  <div className="work-together__person-img">*/}
              {/*    <Image src={parsonImage.src} alt="" />*/}
              {/*  </div>*/}
              {/*  <h2 className="work-together__person-name">Natnael Solomon</h2>*/}
              {/*</div>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogether;
