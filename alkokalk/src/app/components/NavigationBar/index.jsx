import { StyledNavigationBar, StyledLogoContainer, StyledNavLink, StyledLogoText, StyledNavLinkSection, LinkDivider } from "./styles";
import Image from "next/image";

const NavigationBar = () => {
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
            <StyledNavLinkSection>
                <LinkDivider></LinkDivider>
                <StyledNavLink>Alkokalk</StyledNavLink>
                <LinkDivider></LinkDivider>
                <StyledNavLink>About</StyledNavLink>
                <LinkDivider></LinkDivider>
                <StyledNavLink>Github</StyledNavLink>
                <LinkDivider></LinkDivider>
            </StyledNavLinkSection>
        </StyledNavigationBar>
    );
}

export default NavigationBar;