import { styled, keyframes } from "styled-components";

const loading = keyframes`
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
`;

const SkeletonCell = styled.td`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200%;
  animation: ${loading} 1.5s infinite;
  border: 1px solid #000;
  padding: 20px;
`;

export const SkeletonRow = () => (
  <tr>
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
  </tr>
);

export const StyledTable = styled.table`
  width: calc(100% -120px);
  margin: 0 40px;
  border-collapse: collapse;
  overflow-x: auto;
  padding: 10px;

  tr:nth-child(even) {
    background-color: #fff7d6;
  }
  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-column);
  }

  td > a {
    color: #14242f;
    text-decoration: none;

    
  }
  td > a:hover {
    transition: 0.2s;
    ease-in-out;
    font-size: 1.05em;
    color: #3c9054;
    text-decoration: underline;
  }
  

  .country:before {
    grid-area: country;
  }

  .name:before {
    grid-area: name;
  }

  .category:before {
    grid-area: category;
  }

  .price:before {
    grid-area: price;
  }

  .apk:before {
    grid-area: apk;
  }

  .vol:before {
    grid-area: vol;
  }

  @media only screen and (max-width: 760px) {
    width: 100%;
    margin: 0;
    td {
      border: none;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "country . price"
        "name name name"
        "category category category"
        "volume . apk";
      border: 1px solid black;
    }

    td:nth-of-type(1) {
      grid-area: country;
    }
    td:nth-of-type(2) {
      grid-area: name;
    }
    td:nth-of-type(3) {
      grid-area: category;
      text-align: left;
    }
    td:nth-of-type(4) {
      grid-area: apk;
      text-align: right;
    }
    td:nth-of-type(5) {
      grid-area: volume;
    }
    td:nth-of-type(6) {
      grid-area: price;
      text-align: right;
    }
  }
`;

export const StyledCell = styled.td`
  border: 1px solid #000;
  padding: 10px;
`;

export const StyledHeader = styled.th`
  border: 1px solid #000;
  padding: 10px;
`;

export const NoResultsMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #ff0000;
`;
