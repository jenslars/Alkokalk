import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { setItem, getItem, setMeta, getMeta } from '@/app/utils/indexedDB';
import { StyledSearchBar, StyledInput, RecentSearchesContainer } from './styles';

const SearchBar = ({ onSearch }) => {
    const [searchHistory, setSearchHistory] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const searchBarRef = useRef(null);

    useEffect(() => {
        const savedSearches = Cookies.get('searchHistory');
        if (savedSearches) {
            setSearchHistory(JSON.parse(savedSearches));
        }
    }, []);

    const performSearch = async (searchString) => {
        console.log('Searching for:', searchString);

        const initialData = await getItem('systembolagetData');
        console.log(initialData);

        const filteredResults = initialData.filter(item => {
            const productName = item.productNameBold.toLowerCase();
            return productName.includes(searchString);
        });

        onSearch(filteredResults);
        console.log('Filtered results:', filteredResults);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchString = event.target.elements.search.value.toLowerCase();
        console.log('Form submitted with search string:', searchString);

        const updatedSearchHistory = [...searchHistory, searchString];
        setSearchHistory(updatedSearchHistory);
        Cookies.set('searchHistory', JSON.stringify(updatedSearchHistory), { expires: 7 });

        performSearch(searchString);
    };

    const handleSearchClick = (searchString) => {
        setIsFocused(false); 
        performSearch(searchString);
    };

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setIsFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchBarRef}>
            <StyledSearchBar onSubmit={handleSubmit}>
                <StyledInput
                    name="search"
                    type="text"
                    placeholder="Sök efter produkt.."
                    onFocus={() => setIsFocused(true)}
                />
                <StyledInput type="submit" value="Sök" />
            </StyledSearchBar>
            {isFocused && (
                <RecentSearchesContainer>
                    <h3>Tidigare sökningar:</h3>
                    <ul>
                        {searchHistory.map((search, index) => (
                            <li key={index} onClick={() => handleSearchClick(search)} style={{ cursor: 'pointer' }}>
                                {search}
                            </li>
                        ))}
                    </ul>
                </RecentSearchesContainer>
            )}
        </div>
    );
}

export default SearchBar;
