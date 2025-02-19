import CasesPage from "@/components/CaseSection/CasesPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Sector = () => {
  return (
    <Layout pageTitle="Sectors" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Sectors" title="Our Sectors" />
      <CasesPage />
    </Layout>
  );
};

export default Sector;