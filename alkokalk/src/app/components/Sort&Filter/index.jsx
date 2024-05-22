import React, {useState} from "react";
import SearchBar from "../SearchFeature/SearchBar";
import { StyledSortFilterContainer, StyledButton, StyledText, StyledHeader, ButtonContainer } from "./styles";

const SortFilter = ({ onSort, onFilter, onSearch, onReset }) => {
    const [isDescending, setIsDescending] = useState(false);

    const handleSortClick = () => {
        setIsDescending(prevState => !prevState);
        onSort();
    };
    
    return (
        <StyledSortFilterContainer>
            <StyledHeader>Topplista</StyledHeader>
            <StyledText>Systembolagets drycker sorterade efter APK (alkohol per krona)</StyledText>
            <ButtonContainer>
                <StyledButton onClick={handleSortClick}>Sortera enligt {isDescending ? 'stigande' : 'fallande'} APK</StyledButton>
                <StyledButton onClick={onFilter}>Filtrera efter kategori</StyledButton>
                <SearchBar onSearch={onSearch} onReset={onReset} />
            </ButtonContainer>
            <StyledText>Sorteringstyp: Från högst APK till lägst</StyledText>
        </StyledSortFilterContainer>
    );
}

export default SortFilter;
