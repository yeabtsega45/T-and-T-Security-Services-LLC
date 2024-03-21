import footerData from "@/data/siteFooter";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";

const {
  bg,
  logo,
  aboutText,
  author,
  year,
  links,
  socials,
  newsletterText,
  address,
  phone,
  phoneHref,
  email,
} = footerData;

const SiteFooter = ({ footerClassName = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className={`site-footer ${footerClassName}`}>
      <div className="site-footer__top">
        <div
          className="site-footer-shape-1"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <Row>
            <Col xl={4} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__logo">
                  <Link href="/">
                    <Image src={require(`@/images/logo/logo.png`).default.src} alt="Picture of the author" />
                  </Link>
                </div>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">T & T Security
                    Services LLC</p>
                </div>
                <div className="site-footer__social">
                  {socials.map(({ id, href, icon }) => (
                    <a key={id} href={href}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="footer-widget__explore-list list-unstyled clearfix">
                  {links.slice(0, 6).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
                {/* <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled clearfix">
                  {links.slice(5).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </Col>
            {/* <Col xl={4} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__newsletter-box clearfix">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p className="footer-widget__newsletter-text">
                  {newsletterText}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="footer-widget__newsletter-form"
                >
                  <div className="footer-widget__newsletter-input-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn"
                    >
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </Col> */}
            <Col xl={4} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__contact clearfix">
                <h3 className="footer-widget__title">Contact</h3>
                <p className="footer-widget__contact-text">{"10 Clear Spring Lane, Fredericksburg VA 22405"}</p>
                <h4 className="footer-widget__contact-info">
                  <a
                    href={`tel:${"571-641-0625"}`}
                    className="footer-widget__contact-number"
                  >
                    {"571-641-0625"}
                  </a>{" "}
                  <br/>
                  <a
                    href={`mailto:${"infor@ttsecurityservicesllc.com"}`}
                    className="footer-widget__contact-email"
                  >
                    {"infor@ttsecurityservicesllc.com"}
                  </a>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyright {year} by <a href="">{"Revo Solutions PLC"}</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
