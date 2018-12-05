import React from 'react';
import styled from 'styled-components';

const TableHeader = ({openCount, closedCount, ...props}) => {
  return(<StyledHeader className={props.className}><OpenSpan>{openCount} Open</OpenSpan> {closedCount} Closed</StyledHeader>)
};
const OpenSpan = styled.span`
  color: #24292e;
  display: inline-block;
  font-weight: 600;
  padding-top: 13px;
  padding-bottom: 13px;
  position: relative; 
`;

const ClosedSpan = styled.span`
  color: #586069;
  display: inline-block;
  font-weight: 400;
  padding-top: 13px;
  padding-bottom: 13px;
  position: relative; 
`;

const StyledHeader = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  padding: 5px;
`;

export default TableHeader;