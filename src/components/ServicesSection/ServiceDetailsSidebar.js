import { serviceDetailsSidebar } from "@/data/servicesSection";
import { useRouter } from "next/router";
import React from "react";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import { cases } from "@/data/caseSection";

const { navItems, title, phoneIcon, text, phone, phoneHref } =
  serviceDetailsSidebar;

const ServiceDetailsSidebar = ({service}) => {
  const router = useRouter();

  // console.log("serviceDetailsSidebar", serviceDetailsSidebar)

  return (
    <div className="service-details__sidebar">
      <div className="service-details__sidebar-service">
        <ul className="service-details__sidebar-service-list list-unstyled">
          {cases.map((item) => (
            <li key={item.id} className={ '/case-details?'+item.id === router.asPath  ?"current" : ""}>
              <Link href={'case-details?id='+item.id}>
                {item.title} <span className="icon-right-arrow"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-details__need-help">
        <div className="service-details__need-help-shape-1 float-bob-x-6"></div>
        <div className="service-details__need-help-shape-2 float-bob-x-7"></div>
        <h2 className="service-details__need-help-title">
          <TextSplit text={title} />
        </h2>
        <div className="service-details__need-help-icon">
          <span className={phoneIcon}></span>
        </div>
        <div className="service-details__need-help-contact">
          <p>{text}</p>
          <a href={`tel:${"833-267-3287"}`}>{"833-267-3287"}</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSidebar;
