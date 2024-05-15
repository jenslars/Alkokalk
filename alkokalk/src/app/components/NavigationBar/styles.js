import styled from "styled-components";

export const StyledNavigationBar = styled.nav`
  height: 70px;
  color: #14242f;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #fffcf0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
`;

export const StyledLogoText = styled.h1`
  font-size: 40px;
`;

export const StyledNavLinkSection = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-grow: 1;
  margin-left: 20%;
  width: 50%;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const StyledNavLink = styled.a`
  color: #14242f;
  text-decoration: none;
  transition: 0.3s;
  font-size: 22px;

  &:hover {
    font-weight: 500;
    transition: 0.3s;
  }
  cursor: pointer;
`;

export const LinkDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #828282;
  margin: auto 5%;

    @media (max-width: 768px) {
        margin: auto;
`;
