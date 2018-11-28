import React from 'react';
import styled from 'styled-components';
import TableRow from './table-row';

const TableBody = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

const StyledTableRow = styled(TableRow)`
  border-style: hidden solid solid solid;
`;

const StyledLineItem = styled.div`
  font-size: 12px;
  color: #586069;
`;

export default TableBody;
