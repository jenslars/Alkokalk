import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  StyledNavigationBar,
  StyledLogoContainer,
  StyledImageContainer,
  StyledNavLink,
  StyledLogoText,
  StyledNavLinkSection,
  LinkDivider,
  DropdownBtn,
  DropdownMenu,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
const NavigationBar = () => {
  const [imageSize, setImageSize] = useState({ width: 180, height: 180 });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1150) {
        setImageSize({ width: 120, height: 120 });
      } else {
        setImageSize({ width: 180, height: 180 });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdownMenu = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const links = [
    { title: "Alkokalk", href: "/" },
    { title: "Om", href: "/about" },
    { title: "Github", href: "https://github.com/jenslars/Alkokalk" },
  ];

  return (
    <div>
      <StyledNavigationBar>
        <StyledLogoContainer>
          <StyledImageContainer>
            <Image
              src="/images/alkokalk-logo.png"
              alt="Alkokalk Logo"
              width={imageSize.width}
              height={imageSize.height}
              layout="fixed"
            />
          </StyledImageContainer>
          <StyledLogoText>ALKOKALK</StyledLogoText>
        </StyledLogoContainer>
        <DropdownBtn
          onClick={toggleDropdownMenu}
          className={isDropdownVisible ? "active" : ""}
          title="Display menu"
        ></DropdownBtn>
        <StyledNavLinkSection className="links">
          <LinkDivider className="hideOnMobile" />
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.title !== "Github" ? (
                <Link href={link.href} passHref>
                  <StyledNavLink
                    className={router.pathname === link.href ? "active" : ""}
                  >
                    {link.title}
                  </StyledNavLink>
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <StyledNavLink>{link.title}</StyledNavLink>
                </a>
              )}
              <LinkDivider />
            </React.Fragment>
          ))}
        </StyledNavLinkSection>
      </StyledNavigationBar>
      <DropdownMenu className={isDropdownVisible ? "active" : ""}>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link.title !== "Github" ? (
              <Link href={link.href} passHref>
                <StyledNavLink
                  className={router.pathname === link.href ? "active" : ""}
                >
                  {link.title}
                </StyledNavLink>
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <StyledNavLink>{link.title}</StyledNavLink>
              </a>
            )}
            <LinkDivider />
          </React.Fragment>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default NavigationBar;
