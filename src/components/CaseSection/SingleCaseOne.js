import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";


const SingleCaseOne = ({ singleCase = {}, smallImage = false }) => {
  const { id, title, image, image2 } = singleCase;
  const newImage = smallImage && image2 ? image2 : image;
  console.log("newImage", image)
  return (
    <div>
      <div className="case-one__single">
        <div className="case-one__img">
          <Image src={require(`@/images/sector/${newImage}`).default.src} alt="" />
        </div>
        <div className="case-one__content">
          {/* <p className="case-one__tagline">{tagline}</p> */}
          <h3 className="case-one__title">
            <Link href={`/case-details?id=${id}`}>
              <TextSplit text={title} />
            </Link>
          </h3>
        </div>
        <div className="case-one__arrow">
          <Link href={`/case-details?id=${id}`}>
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCaseOne;
