import React from "react";
import SearchBar from "../SearchFeature/SearchBar";
import { StyledSortFilterContainer, StyledButton, StyledText, StyledHeader, ButtonContainer } from "./styles";

const SortFilter = ({ onSort, onFilter, onSearch }) => {
    return (
        <StyledSortFilterContainer>
            <StyledHeader>Topplista</StyledHeader>
            <StyledText>Systembolagets drycker sorterade efter APK (alkohol per krona)</StyledText>
            <ButtonContainer>
                <StyledButton onClick={onSort}>Sortera fallande/stigande</StyledButton>
                <StyledButton onClick={onFilter}>Filtrera efter kategori</StyledButton>
                <SearchBar onSearch={onSearch} />
            </ButtonContainer>
            <StyledText>Sorteringstyp: Från högst APK till lägst</StyledText>
        </StyledSortFilterContainer>
    );
}

export default SortFilter;
