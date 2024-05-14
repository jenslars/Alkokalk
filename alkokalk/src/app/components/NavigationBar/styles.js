import styled from "styled-components";

export const StyledNavigationBar = styled.nav`
    height: 70px;
    color: #14242F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFCF0;
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
`;

export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 40px;
`;

export const StyledLogoText = styled.h1`
    margin-left: 10px; /* Adjust margin as needed */
`;

export const StyledNavLinkSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 500px;
    margin-right: 5%;
`;

export const StyledNavLink = styled.a`
    color: #14242F;
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
    margin: auto;
`;
