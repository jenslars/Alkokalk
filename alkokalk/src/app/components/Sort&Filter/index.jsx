import React, {useState} from "react";
import SearchBar from "../SearchFeature/SearchBar";
import { StyledSortFilterContainer, StyledButton, StyledText, StyledHeader, ButtonContainer, StyledSelect } from "./styles";

const SortFilter = ({ onSort, onFilter, onSearch, onReset }) => {
    const [isDescending, setIsDescending] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSortClick = () => {
        setIsDescending(prevState => !prevState);
        onSort();
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onFilter(category);
    };
    
    return (
        <StyledSortFilterContainer>
            <StyledHeader>Topplista</StyledHeader>
            <StyledText>Systembolagets drycker sorterade efter APK (alkohol per krona)</StyledText>
            <ButtonContainer>
                <StyledButton onClick={handleSortClick}>Sortera enligt {isDescending ? 'stigande' : 'fallande'} APK</StyledButton>
                <StyledSelect value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Välj kategori</option>
                    <option value="öl">Öl</option>
                    <option value="vin">Vin</option>
                    <option value="sprit">Sprit</option>
                </StyledSelect>
                <SearchBar onSearch={onSearch} onReset={onReset} />
            </ButtonContainer>
            <StyledText>Sorteringstyp: {isDescending ? 'Från högst APK till lägst' : 'Från lägst APK till högst'}</StyledText>
        </StyledSortFilterContainer>
    );
}

export default SortFilter;
