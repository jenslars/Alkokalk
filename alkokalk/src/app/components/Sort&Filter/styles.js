import styled from "styled-components";

export const StyledSortFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    margin-left: 60px;
    margin-bottom: 0px;
    padding: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px; 
    margin: 10px 0; 
`;

export const StyledButton = styled.button`
    color: #fffcf0; 
    font-size: 14px;
    padding: 5px 20px;
    background-color: #3C9054;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #235431;
    }
`;

export const StyledText = styled.p`
    font-size: 18px;
    color: #14242F;
`;

export const StyledHeader = styled.h2`
    margin-bottom: 10px;
    font-size: 32px;
    color: #14242F;
`;