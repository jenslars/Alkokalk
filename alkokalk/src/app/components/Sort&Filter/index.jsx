import React, {useState} from "react";
import Select from "react-select";
import SearchBar from "../SearchFeature/SearchBar";
import { StyledSortFilterContainer, StyledButton, StyledText, StyledHeader, ButtonContainer, StyledSelect, StyledOption } from "./styles";

const SortFilter = ({ onSort, onFilter, onSearch, onReset }) => {
    const [isDescending, setIsDescending] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSortClick = () => {
        setIsDescending(prevState => !prevState);
        onSort();
    };

    const handleCategoryChange = (selectedOption) => {
        const category = selectedOption ? selectedOption.value : '';
        setSelectedCategory(category);
        onFilter(category);
    };

    const categoryOptions = [
        { value: '', label: 'Välj kategori' },
        { value: 'öl', label: 'Öl' },
        { value: 'vin', label: 'Vin' },
        { value: 'sprit', label: 'Starksprit' },
    ];
 
    return (
        <StyledSortFilterContainer>
            <StyledHeader>Topplista</StyledHeader>
            <StyledText>Systembolagets drycker sorterade efter APK (alkohol per krona)</StyledText>
            <ButtonContainer>
                <StyledButton onClick={handleSortClick}>Sortera enligt {isDescending ? 'stigande' : 'fallande'} APK</StyledButton>
                <Select
                    value={categoryOptions.find(option => option.value === selectedCategory)}
                    onChange={handleCategoryChange}
                    options={categoryOptions}
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: '#3C9054',
                            color: '#fffcf0',
                            borderRadius: '25px',
                            border: 'none',
                            padding: '5px 20px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            color: '#fffcf0',
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused ? '#235431' : '#fffcf0',
                            color: state.isFocused ? '#fffcf0' : '#14242F',
                            cursor: 'pointer',
                            borderRadius: '25px'
                        }),
                        menu: (provided) => ({
                            ...provided,
                            borderRadius: '25px',
                        }),
                    }}
                />
                <SearchBar onSearch={onSearch} onReset={onReset} />
            </ButtonContainer>
            <StyledText>Sorteringstyp: {isDescending ? 'Från högst APK till lägst' : 'Från lägst APK till högst'}</StyledText>
        </StyledSortFilterContainer>
    );
}

export default SortFilter;
