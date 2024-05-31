import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  font-size: 20px;
`;

export const StyledAboutLinks = styled.a`
    text-decoration: none;
    color: #14242f;
    font-weight: 600;
  &:hover {
    transform: scale (1.1);
    transition: 0.3s;
  }
  cursor: pointer;
`