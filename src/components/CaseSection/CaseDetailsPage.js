// 'use client'
import { caseDetailsPage } from "@/data/caseSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseDetailsContent from "./CaseDetailsContent";
import CaseDetailsImg from "./CaseDetailsImg";
import CaseDetailsPagination from "./CaseDetailsPagination";
// import {useRouter} from "next/router";
import { cases } from "@/data/caseSection";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { bankingAdvising } from "@/data/servicesSection";
// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";


const { image, clientName, category, date, ...content } = caseDetailsPage;
const { title } = bankingAdvising;

const CaseDetailsPage = () => {
  const router = useRouter()
  // const searchParams = useSearchParams()
  // const serviceParamId = searchParams.get('id')

  // console.log("serviceParamId", router.asPath)

  const newData = cases.filter((item) => {
    return '/case-details?id='+item?.id ===  router.asPath
  });

  // console.log("newData", newData)

  return (
    <Layout pageTitle={title}>
      <ServiceDetails service={newData} />
      <CtaOne />
    </Layout>
  );
};

export default CaseDetailsPage;
