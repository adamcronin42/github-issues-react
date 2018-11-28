import React from 'react';
import styled from 'styled-components';
import TableRow from './table-row';

const TableBody = props => {
  return (
    <StyledTableBody>
      {props.data.map(node => <TableRow text={node.title} />)}
    </StyledTableBody>
  );
};

//TODO: fix the styling so the divs look like a table

const StyledTableBody = styled('TableBody')`
  color: green;

`;

export default TableBody;
