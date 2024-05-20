import { StyledSearchBar } from "./styles";

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <input type="text" placeholder="Search beverage, brand"></input>
            <input type="submit"></input>
        </StyledSearchBar>
    )
}

export default SearchBar;