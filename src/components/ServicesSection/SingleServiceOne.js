import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from 'next/router'

const SingleServiceOne = ({ service = {} }) => {
  const { title, image, icon, href, text, new_icon, id } = service;
  const icon1 = "evaluation_12197473.svg";
  const router = useRouter()
  console.log("route", router)

  return (
    <div className="services-one__single">
      <div className="services-one__img">
        <Image src={require(`@/images/services/${image}`).default.src} alt="" />
      </div>
      
        {
          router.route !== "/partners" &&  <div className="services-one__content">
          <div className="services-one__title-box">
            <div className="services-one__title-icon">
              {/*<span className={icon}></span>*/}
              <Image src={require(`@/images/icon/${new_icon}`).default.src} alt="Picture of the author"  width={100} height={100}/>
            </div>
            <h3 className="services-one__title">
              <div>
                <TextSplit text={title} />
              </div>
            </h3>
          </div>
          <p className="services-one__text">{text}</p>
          {/*<div className="services-one__bottom">*/}
          {/*  <Link href={href} className="services-one__read-more">*/}
          {/*    Read More*/}
          {/*  </Link>*/}
          {/*  <Link href={href} className="services-one__arrow">*/}
          {/*    <span className="icon-right-arrow"></span>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
        }

    </div>
  );
};

export default SingleServiceOne;
