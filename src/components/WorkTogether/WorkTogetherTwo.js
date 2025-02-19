import { workTogetherTwo } from "@/data/workTogether";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const { image, tagline, title, icon, text, text2 } = workTogetherTwo;

const WorkTogetherTwo = () => {
  return (
    <section>
      <Container>
        <Row>
          {/* <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image src={require(`@/images/about/about_us_lg.png`).default.src} alt="" />
              </div>
            </div>
          </Col> */}
          <Col xl={12} lg={12}>
            <div >
              {/* <Title title={"Welcome to T & T Security Services LLC"} tagline={tagline} className="text-left" /> */}
           <p className="mt-5">

{`           T & T Security Services LLC is a Service Provider of Security Integration. Owned and
operated by Myrna and Richard Taylor. Myrna the Chief Executive Officer and majority
owner has over twenty years of experience in the Healthcare Industry as a Licensed
Insurance Agent. She is specialized in providing detailed information to companies to
make informed decisions about healthcare programs for their employees. Myrna is also
a disabled Veteran who served in the U.S. Army. Moreover, Richard, the Chief
Operation Officer and minority owner, has over twenty-five years of experience in the
industry. He has worked in various positions, from basic cable puller to designing and
managing the installation of security systems for notable projects such as the Martin
Luther King Jr. Monument and the LAX Automated People Mover Train System.
Richard's extensive experience and knowledge make him an asset to our company.`}
</p>
<p>
{`At T & T Security Services LLC, we strive to make a positive impact on our clients'
building services and the environment. We collaborate with leading manufacturers to
provide technology solutions that conserve resources, increase energy efficiency,
reduce carbon footprint, and promote the health and well-being of individuals. We call
this approach "Building Thew" and it aligns with our commitment to sustainability.
Additionally, we offer AloT video solutions designed to meet future requirements and
support businesses in reducing CO2 emissions. Our unique cloud-based approach,
known as the Green Way promise, ensures convenience, cost-effectiveness, and
reduced travel and CO2 emissions.`}
</p>
<p>
{`Our company is guided by five core values that shape our culture and operations.
These values are PRIDE, which stands for:`}
</p>
<ul>
<li>
{`People: Our highly skilled and enthusiastic security professionals provide
exceptional security solutions to our customers.`}
</li>
<li>
{`Respect: We value diversity and conduct our business with empathy,
compassion, collaboration, solidarity, and respect for everyone.`}
           </li>

<li>
{`Integrity: We are committed to the highest standards of ethical conduct in
safeguarding client information.`}
</li>

<li>
{`Development: We foster growth, innovation, and high-quality performance
through formal training and on-the-job challenges.`}
</li>

<li>
{`Excellence: We set industry standards with comprehensive and integrated
security solutions that meet our customers' needs.`}
</li>

</ul>

<p>
{`We firmly believe in our motto, "Quality First and Foremost," which sets us apart from
our competitors. Our commitment to providing peace of mind to our clients is
unwavering. We never compromise on the quality of equipment we supply, ensuring
that it is suited for purpose and offers superior performance and reliability. While our
products may appear slightly more expensive initially, their long-term value and
effectiveness make them a worthwhile investment.`}
</p>
<p>
{`T & T Security Services LLC offers a range of services, including consulting, site survey,
design, engineering, project management, installation, commissioning and integration,
after-sales support, quality control, and warranty. We work closely with our customers,
especially during the design phase, to ensure that the system meets their specific
requirements. We also collaborate with our suppliers' experts when necessary to
provide the best possible solutions.`}
</p>

<p>
{`In conclusion, T & T Security Services LLC is the trusted partner you can rely on for
premier security integration solutions. Our personalized approach, exceptional customer
service, and cutting-edge technology set us apart from other companies in the market.
We continuously strive to stay ahead of market trends and customer needs, delivering
reliable results and revolutionizing the industry. We are committed to providing
exceptional service while prioritizing sustainability and comprehensive protection.`}
</p>
              {/*<Link href="/about" className="thm-btn work-together-tow__btn">*/}
              {/*  Discover More*/}
              {/*</Link>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogetherTwo;
