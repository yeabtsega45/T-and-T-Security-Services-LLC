import { qualityWork } from "@/data/qualityWork";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";
import SingleTab from "./SingleTab";
import Image from 'next/image'

const { tagline, title, tabs, points } = qualityWork;

const QualityWork = () => {
  const [current, setCurrent] = useState("solutions");

  return (
    <section className="quality-work">
      <div className="quality-work-shape-1 float-bob-x-2"></div>
      <div className="quality-work-shape-2 float-bob-x-2"></div>
      <Container>
        <Row>
          <Col xl={5} lg={5}>
            <div className="quality-work__left">
              <Title tagline={"About Us"} className="text-left" >
                <h2 style={{ color: 'white', fontSize: 52, fontWeight: 'bold'}}>Welcome to</h2>
                {/*<br/>*/}
                {/*<TextSplit text={"T & T Security"} />*/}
                <h2 style={{ color: 'white', fontSize: 52, fontWeight: 'bold'}}>T & T Security</h2>
                <h2 style={{ color: 'white', fontSize: 52, fontWeight: 'bold'}}>Services LLC</h2>
              </Title>
              {/*<div className="quality-work__tab-box tabs-box">*/}
              {/*  <ul className="tab-buttons clearfix list-unstyled">*/}
              {/*    {tabs.map(({ id, tagline }) => (*/}
              {/*      <li*/}
              {/*        onClick={() => setCurrent(id)}*/}
              {/*        key={id}*/}
              {/*        className={`tab-btn${*/}
              {/*          current === id ? " active-btn" : ""*/}
              {/*        }`}*/}
              {/*      >*/}
              {/*        <span>{tagline}</span>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*  <div className="tabs-content">*/}
              {/*    {tabs.map((tab) => (*/}
              {/*      <SingleTab key={tab.id} tab={tab} current={current} />*/}
              {/*    ))}*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </Col>
          <Col xl={7} lg={7}>
            <div className="quality-work__right">
              <ul className="quality-work__points list-unstyled">
                {points.map(({ id, icon, title, text }) => (
                  <li key={id}>
                    <div className="icon">
                      {/*<span className={icon}></span>*/}
                      <Image src={require(`@/images/logo/logo-white.svg`).default.src} alt="Picture of the author"  width={100} height={100}/>
                    </div>
                    <div className="text">
                      {/*<h4>{title}</h4>*/}
                      <p style={{color: 'white'}}>{"At T & T Security Services LLC, we are committed to providing top-notch security integration consulting services to help you protect your company's assets. Our team of experts will work with you to design and implement a customized security solution that meets your unique needs. Click below to learn more about our services."}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualityWork;
