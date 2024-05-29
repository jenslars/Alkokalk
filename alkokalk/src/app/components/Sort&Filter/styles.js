import styled from "styled-components";

export const StyledSortFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  margin-left: 60px;
  margin-bottom: 0px;
  padding: 10px;
  @media (max-width: 1150px) {
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    padding: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledButton = styled.button`
  color: #fffcf0;
  font-size: 14px;
  padding: 5px 20px;
  background-color: #3c9054;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #235431;
  }
`;

export const StyledSelect = styled.select`
  color: #fffcf0;
  font-size: 14px;
  padding: 5px 25px;
  background-color: #3c9054;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #235431;
  }
  @media (max-width: 1150px) {
    padding: 5px 55px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  color: #14242f;
`;

export const StyledHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
  color: #14242f;
`;
