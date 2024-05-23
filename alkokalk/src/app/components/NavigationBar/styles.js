import styled from "styled-components";

export const StyledNavigationBar = styled.nav`
  height: 70px;
  color: #14242f;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #fffcf0;
  margin-top: 30px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0;
    margin-top: 0;
    .links {
      flex-direction: column;
    }
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledImageContainer = styled.div`
  width: 180px; // Default width
  height: 180px; // Default height
  border-radius: 90px; // Circular image
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  // Media query for smaller screens
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-left: -25px;
  }
`;



export const StyledLogoText = styled.h1`
  margin-left: 10px;

    @media (max-width: 768px) {
        margin-left: -20px;
        font-size: 2rem;
`;


export const StyledNavLinkSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  width: 500px;
  margin-right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.span`
  color: #14242f;
  text-decoration: none;
  transition: 0.3s;
  font-size: 1.4rem;

  &:hover {
    font-weight: 500;
    transition: 0.3s;
  }
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 10px;
  }

`;

export const LinkDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #828282;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    background-color: #e8e8e8;
    
  }
`;

export const DropdownBtn = styled.button`
  display:none;
  background-color: #fffcf0;
  height: 40px;
  width: 40px;
  border: none;
  background-image: url('/images/dropdownMenuIcon.png');
  background-size: 40px;
  background-repeat: no-repeat;
  margin-right: 5%;
  cursor: pointer;

  &.active{
    background-image: url('/images/closeIcon.png');
  }

  @media (max-width: 768px) {
    display:flex;
  }


`

export const DropdownMenu = styled.div`
  display:none;
  margin: 20px auto;
  flex-direction: column;
  width: 96%;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;             // Ensure it's using flexbox
  flex-direction: column;    // Stack children vertically

  a {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  a:last-child {
    margin-bottom: 0;

  @media (max-width: 768px) {
    display:flex;
  }

`;

