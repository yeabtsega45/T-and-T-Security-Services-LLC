import {contactDetails} from "@/data/contact";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";
import Image from 'next/image'

const {phone, phoneHref, email, title, text, address, contactIcon} =
    contactDetails;

const ContactDetails = () => {
    return (
        <section className="contact-details">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="contact-details__inner">
                            {/*<GoogleMap*/}
                            {/*  containerClassName="contact-details__map-box"*/}
                            {/*  mapClassName="contact-details__map"*/}
                            {/*  mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"*/}
                            {/*/>*/}

                            <Row>
                                <Col xl={6} lg={6}>
                                    <div className="work-together-two__left animated slideInLeft">
                                        <div className="work-together-two__img">
                                            <Image src={require(`@/images/about/about_us_lg.png`).default.src} alt=""
                                                   width={200} height={550}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6}>
                                    <div className="contact-details__content">
                                        <div className="contact-details__title-box">
                                            <h4 className="contact-details__title">{title}</h4>
                                            <p className="contact-details__text">{"Contact us today to learn more about our security integration consulting services and how we can help you protect your company's assets."}</p>
                                        </div>
                                        <p className="contact-details__address">{"7518 Suite M Fullerton Road Springfield Virginia 22153"}</p>
                                        <div className="contact-details__contact-info">
                                            <div className="contact-details__contact-icon">
                                                <span className={contactIcon}></span>
                                            </div>
                                            <h4 className="contact-details__contact-number-email">
                                                <a
                                                    href={`tel:${"5833-267-3287"}`}
                                                    className="contact-details__contact-number"
                                                >
   {"833-267-3287"}
                                                </a>
                                                {/*<a*/}
                                                {/*    href={`tel:${"571-641-0625"}`}*/}
                                                {/*    className="contact-details__contact-number"*/}
                                                {/*>*/}
                                                {/*    {"571-641-0625"}*/}
                                                {/*</a>*/}
                                                <a
                                                    href={`tel:${"11-21516"}`}
                                                    className="contact-details__contact-number"
                                                >
                                                    {"DCJS Number 11-21516"}
                                                </a>
                                                <a
                                                    href={`mailto:${"info@ttsecurityservicesllc.com"}`}
                                                    className="contact-details__contact-email"
                                                >
                                                    {"info@ttsecurityservicesllc.com"}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactDetails;
