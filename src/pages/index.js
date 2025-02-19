import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import WorkTogether from "@/components/WorkTogether/WorkTogether";
import {mainSlider} from "@/data/mainSlider";
import React from "react";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import {servicesTwo} from "@/data/servicesSection";
import QualityWork from "@/components/QualityWork/QualityWork";

const {title, tagline, text, services} = servicesTwo;
const Home = () => {
    return (
            <Layout pageTitle="T & T Security Services LLC">
                <Header/>
                <MainSlider sliders={mainSlider} showShape/>
                {/*<WelcomeOne />*/}
                <QualityWork/>
                {/*<CaseOne />*/}
                {/*<BenefitsOne />*/}
                {/*<FreeConsultation />*/}
                <ServicesOne serviceCount={6}/>
                <WorkTogether/>
                {/*<OurMission />*/}
                {/*<TeamOne />*/}
                {/*<TestimonialOne />*/}
                {/*<TrustedOne />*/}
                {/*<NewsOne showShape />*/}
                <CtaOne/>
            </Layout>
    );

};

export default Home;
