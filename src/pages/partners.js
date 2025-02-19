import CasesPage from "@/components/CaseSection/CasesPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import ServicesOneCarousel from "@/components/ServicesSection/ServicesOneCarousel";
import SingleServiceOne from "@/components/ServicesSection/SingleServiceOne";
import { servicesOne, partners } from "@/data/servicesSection";
import { Image } from "react-bootstrap";

const Sector = () => {
  const { partnersList } = partners;
  return (
    <Layout pageTitle="Partners" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Partners" title="Our Partners" />
      {/* <ServicesOneCarousel /> */}
      <div className="row ">
      {
       partnersList.map((service) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="col-12 col-md-6 col-lg-4 services-one__single" >
          <div className="services-one__img"
          style={{
            padding: '10px'
          }}
          >
            <Image src={require(`@/images/services/${service.image}`).default.src} alt="" />
          </div>
          
        </div>
        )
       })

}
      </div>
    </Layout>
  );
};

export default Sector;