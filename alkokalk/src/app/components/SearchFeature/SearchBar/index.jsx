import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { setItem, getItem, setMeta, getMeta } from '@/app/utils/indexedDB';
import { StyledSearchBar, StyledInput, RecentSearchesContainer } from './styles';

const SearchBar = () => {
    const [results, setResults] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const savedSearches = Cookies.get('searchHistory');
        if (savedSearches) {
            setSearchHistory(JSON.parse(savedSearches));
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchString = event.target.elements.search.value.toLowerCase();
        console.log('Form submitted with search string:', searchString);

        const updatedSearchHistory = [...searchHistory, searchString];
        setSearchHistory(updatedSearchHistory);
        Cookies.set('searchHistory', JSON.stringify(updatedSearchHistory), { expires: 7 });

        const initialData = await getItem('systembolagetData');
        console.log(initialData);

        const filteredResults = initialData.filter(item => {
            const productName = item.productNameBold.toLowerCase();
            return productName.includes(searchString);
        });

        setResults(filteredResults);
        console.log('Filtered results:', filteredResults);
    };

    return (
        <div>
            <StyledSearchBar
                onSubmit={handleSubmit}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <StyledInput name="search" type="text" placeholder="Search beverage, brand" />
                <StyledInput type="submit" value="Search" />
            </StyledSearchBar>
            {isFocused && (
                <RecentSearchesContainer>
                    <h3>Recent Searches</h3>
                    <ul>
                        {searchHistory.map((search, index) => (
                            <li key={index}>{search}</li>
                        ))}
                    </ul>
                </RecentSearchesContainer>
            )}
        </div>
    );
}

export default SearchBar;
