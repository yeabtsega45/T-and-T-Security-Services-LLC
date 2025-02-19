import image from "@/images/case/case-details-img-1.jpg";

export const cases = [
  {
    id: 1,
    image: "sector_04.jpg",
    image2: "sector_4.jpg",
//    tagline: "leadership",
    title: "Retail \n",
    description: "As a business owner, you know the importance of keeping your assets safe. At T & T Security Services LLC, we provide top-notch security integration consultation services to help you protect your business. Our team of experts will work with you to assess your security needs and develop a customized plan to ensure the safety of your assets. Whether you're in retail or any other industry, we've got you covered."
  },
  {
    id: 2,
    image: "sector_01.jpg",
    image2: "sector_1.jpg",
//    tagline: "Management",
    title: "Hospitality \n",
    description: "At T & T Security Services LLC, we understand that the hospitality industry requires a unique approach to security. Our team of experts will work with you to develop a comprehensive plan to protect your guests, employees, and assets. From hotels to restaurants, we've got the expertise to keep your business safe."
  },
  {
    id: 3,
    image: "sector_02.jpg",
    image2: "sector_2.jpg",
//    tagline: "strategy",
    title: "Health \n Care",
    description: "In the healthcare industry, security is of utmost importance. At T & T Security Services LLC, we provide security integration consultation services to help you protect your patients, employees, and assets. Our team of experts has extensive experience working in the healthcare industry and understands the unique security challenges it presents. Let us help you develop a customized plan to ensure the safety of your business."
  },
  {
    id: 4,
    image: "sector_03.jpg",
    image2: "sector_3.jpg",
//    tagline: "growth",
    title: "Real \n Estate",
    description: "As a real estate professional, you know the importance of keeping your properties safe. At T & T Security Services LLC, we provide top-notch security integration consultation services to help you protect your assets. Our team of experts will work with you to assess your security needs and develop a customized plan to ensure the safety of your properties. Let us help you keep your business secure."
  },
  {
    id: 5,
    image: "sector_05.jpg",
    image2: "sector_5.jpg",
//    tagline: "briliant",
    title: "Education",
    description: "In the education industry, security is essential. At T & T Security Services LLC, we provide security integration consultation services to help you protect your students, faculty, and assets. Our team of experts has extensive experience working with schools and universities and understands the unique security challenges they present. Let us help you develop a customized plan to ensure the safety of your educational institution."
  },
  {
    id: 6,
    image: "sector_6.jpg",
    image2: "sector_06.jpg",
//    tagline: "briliant",
    title: "CYBER SECURITY",
    description: "Cyber threats, data breaches, and security misconfigurations are on the rise, placing your enterprise at risk when you least expect it. In 2018, the Ponemon Institute reported that two-thirds of all small and medium-sized businesses faced a cyber-attack within the year, and that over half had their data breached. In 2019, cybercrime cost over $3.5 billion in the US alone. If your business or organization stores sensitive personal information, experienced cybercriminals can hack into your network within hours, if not minutes. At T & T Security Services, LLC, our cyber security services are designed to identify and prevent cybercrime activities before they happen. As a premier cyber security contractor with a diverse client base, our products and services can help you monitor and respond to potential threats. Our experienced cybersecurity professionals stand ready to assist you with product installations, service, and training.Our state-of-the-art products protect your IT system by providing advanced cybersecurity across multiple domains, including security and risk management, security engineering, information security, threat modeling, and much more. If you compete in an industry like education, government, retail, or commercial, we can tailor a streamlined cyber security program that seamlessly addresses your individual needs. Enhance the cyber security of your enterprise with the latest technology from T & T Security Services LLC."
  },
];

export const caseOne = {
  tagline: "Our recent work",
  title: "New Case Studies",
  cases,
};

export const similarCase = {
  tagline: "more works",
  title: "Similar Cases",
  cases: cases.slice(3, 6),
};

export const caseDetailsPage = {
  image,
  clientName: "Jessica Brown",
  category: "Marketing, Consulting",
  date: "20 October, 2022",
  title: "Marketing Advice",
  text1:
    "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  text2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut enim ad minim veniam.",
  text3:
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. There are many variations of passages.",
  text4:
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
  points: [
    "Is your van a little old and tired.",
    "Lorem Ipsum is simply dummy text.",
    "When an unknown printer took.",
    "Has survived not only five centuries.",
    "The leap into electronic typesetting.",
  ],
};
