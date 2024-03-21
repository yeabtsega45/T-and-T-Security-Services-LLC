import React from "react";
import { Container } from "react-bootstrap";

const GoogleMapTwo = () => {
  return (
    <section className="google-map-two">
      <Container>
        <div className="google-map-two__inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="google-map__two-map"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMapTwo;
