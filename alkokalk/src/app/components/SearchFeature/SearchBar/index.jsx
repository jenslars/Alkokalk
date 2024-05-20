// SearchBar.js
import React from 'react';
import { StyledSearchBar, StyledInput } from './styles';

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <StyledInput type="text" placeholder="Search beverage, brand" />
            <StyledInput type="submit" value="Search" />
        </StyledSearchBar>
    );
}

export default SearchBar;
