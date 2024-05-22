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

export const StyledLogoText = styled.h1`
  margin-left: 10px;

    @media (max-width: 768px) {
        margin-left: 0;
        font-size: 1.5rem;
`;

export const StyledNavLinkSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  width: 500px;
  margin-right: 5%;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-left: 20%;
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
    font-size: 1.2rem;
  }
`;

export const LinkDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #828282;
  margin: auto;
  @media (max-width: 768px) {
    width: 30%;
    height: 1px;
    margin: 5px 0;
  }
`;
