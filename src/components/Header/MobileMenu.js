import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import MenuList from "./MenuList";

const { logo, navItems: items, phone, phoneHref, email, socials } = headerData;

const MobileMenu = ({ navItems = items, onePage = false }) => {
  const { menuStatus, toggleMenu } = useRootContext();

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };
  console.log("menuStatus", menuStatus)
  return (
    <div className={`mobile-nav__wrapper${menuStatus ? " expanded" : ""}`}>
      <div
        onClick={handleToggleMenu}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={handleToggleMenu}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <Image src={require(`@/images/logo/logo.png`).default.src} alt="Picture of the author" />
          </Link>
        </div>
        <div className="mobile-nav__container">
          <MenuList navItems={navItems} mobile onePage={onePage} />
        </div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href={`mailto:${"infor@ttsecurityservicesllc.com"}`}>{"info@ttsecurityservicesllc.com"}</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href={`tel:${"833-267-32875"}`}>{"833-267-3287"}</a>
          </li>
        </ul>
        {/*<div className="mobile-nav__top">*/}
        {/*  <div className="mobile-nav__social">*/}
        {/*    {socials.map(({ id, href, icon }) => (*/}
        {/*      <a key={id} href={href} className={icon}></a>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default MobileMenu;
