import {
  StyledNavigationBar,
  StyledLogoContainer,
  StyledNavLink,
  StyledLogoText,
  StyledNavLinkSection,
  LinkDivider,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const links = [
    { title: "Alkokalk", href: "/home" },
    { title: "Om", href: "/about" },
    { title: "Github", href: "https://github.com/jenslars/Alkokalk" },
  ];
  return (
    <StyledNavigationBar>
      <StyledLogoContainer>
        <Image
          src="/images/alkokalk-logo.png"
          alt="Alkokalk Logo"
          width={180}
          height={180}
        />
        <StyledLogoText>ALKOKALK</StyledLogoText>
      </StyledLogoContainer>
      <StyledNavLinkSection className="links">
        <LinkDivider></LinkDivider>
        {links.map((link) => (
          <>
            <Link
              key={link.title}
              href={link.href}
              style={{ textDecoration: "none" }}
            >
              <StyledNavLink>{link.title}</StyledNavLink>
            </Link>
            <LinkDivider></LinkDivider>
          </>
        ))}
      </StyledNavLinkSection>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
