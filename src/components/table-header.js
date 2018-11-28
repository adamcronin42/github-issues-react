import React from 'react';
import styled from 'styled-components';

const TableHeader = props => {
  return(<StyledHeader>{props.header} Open</StyledHeader>)
};

const StyledHeader = styled.div`
  color: red;
  border-style: solid;
  padding: 5px;
`;

export default TableHeader;