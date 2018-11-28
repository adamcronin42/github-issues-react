import React from 'react';
import styled from 'styled-components';

const TableHeader = props => {
  return(<StyledHeader>{props.header} Open</StyledHeader>)
};

const StyledHeader = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  padding: 5px;
`;

export default TableHeader;