import { ctaOne } from "@/data/ctaSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const { title, href } = ctaOne;

const CtaOne = ({ className = "" }) => {
  return (
    <section className={`cta-one ${className}`}
//      style={{'marginTop': 20}}
      >
      <Container>
        <Row>
          <Col xl={12}>
            <div className="cta-one__inner">
              <div className="cta-one__inner-content">
                <div className="cta-one-shape-1 float-bob-x"></div>
                <div className="cta-one-shape-2 float-bob-x-2"></div>
                <h3 className="cta-one__title">
                  <TextSplit text={"T & T Security Services LLC"} />
                </h3>
                <Link href={"/about"} className="thm-btn cta-one__btn">
                  <p style={{color: 'white'}}>
                    Discover More
                    </p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
