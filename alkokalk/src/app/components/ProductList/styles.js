import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: block;

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
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

    .hide-on-mobile {
      display: none;
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
