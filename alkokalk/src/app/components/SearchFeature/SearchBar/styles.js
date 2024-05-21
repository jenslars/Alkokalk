// styles.js
import styled from 'styled-components';

export const StyledSearchBarDiv = styled.div`
    display:flex;

`

export const StyledSearchBar = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #FFFEF8;
    border-radius: 100px;
    width: 300px;
    border: 1px solid #BABABA;
    &:focus-within {
        outline: 2px solid #3C9054;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    background-color: #FFFEF8;
    &[type="text"] {
        flex: 1;
        &:focus {
            outline: none;
        }
    }

    &[type="submit"] {
        border-radius: 100px;
        background-color: #3C9054;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s ease;
        background-image: url('images/searchIcon.png');
        background-repeat: no-repeat;
        background-position: 45px;
        background-size: 20px;
        padding-right: 40px;
        font-weight: 600;

        &:hover {
            background-color: #235431;
        }
    }
`;

export const RecentSearchesContainer = styled.div`
    position: absolute;
    margin-top: 52px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 10px;
    width: 295px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            padding: 5px 0;
            border-bottom: 1px solid #eee;

            &:last-child {
                border-bottom: none;
            }
        }
    }
`;

export const ClearButton = styled.button`
    margin-left: 10px;
    padding: 10px;
    background-color: #ffffff;
    color: #3c9054;
    font-weight: 600;
    border: none;
    cursor: pointer;

    background-image: url('images/closeIcon.png');
    background-repeat: no-repeat;
    background-position: 140px;
    background-size: 15px;
    padding-right: 40px;

    &:hover {
       
    }
`;